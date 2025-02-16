import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import Header from "../components/Header";
import Hero1 from "@/components/hero1";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const contactData = {
  hero: {
    title: "Contact Us",
    subtitle:
      "Thank you for your interest in our services. Please complete the form below, and our team will get in touch with you shortly.",
  },
  contactInfo: [
    { icon: faPhoneAlt, text: "+61283245788", action: "copy", type: "phone" },
    {
      icon: faEnvelope,
      text: "admin@talentspreesolutions.com",
      action: "copy",
      type: "email",
    },
    {
      icon: faMapMarkerAlt,
      text: "Cebu City, Philippines",
      action: "link",
      url: "https://www.google.com/maps?q=Cebu+City,+Philippines",
    },
  ],
  jobOpening: {
    title: "Want to Join Our Talented Team?",
    text: "Visit Our Job Board",
    link: "/job-openings",
  },
  form: {
    fields: [
      {
        name: "firstName",
        type: "text",
        placeholder: "First Name",
        required: true,
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "Last Name",
        required: true,
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email Address",
        required: true,
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "Phone Number",
        required: true,
      },
      {
        name: "country",
        type: "select",
        placeholder: "Select Country",
        options: ["Australia", "USA", "UK"],
        required: true,
      },
      {
        name: "helpType",
        type: "select",
        placeholder: "How can we help you?",
        options: ["Recruitment", "Consulting", "Job Seekers"],
        required: true,
      },
    ],
    consentText:
      "Yes, I would like to receive regular updates. I understand that I can withdraw my consent at any time.",
    buttonText: "Contact us",
    cvUploadText: "Upload CV (PDF only)",
  },
};

const ContactCard = ({ icon, text, onClick }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-[250px] h-[150px] bg-[#A0D683] hover:bg-[#D3EE98] rounded-lg shadow-lg 
      transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <Card className="h-full border-none bg-transparent">
      <CardContent className="flex flex-col items-center justify-center h-full p-6 text-accent-foreground">
        <FontAwesomeIcon icon={icon} className="text-3xl mb-2" />
        <p className="font-medium text-sm text-center">{text}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ContactUs = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cvFile, setCvFile] = useState(null);

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      const minScrollThreshold = 10;

      if (scrollDifference > minScrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: `${text} copied to clipboard`,
          duration: 3000,
        });
      })
      .catch(console.error);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 25 * 1024 * 1024; // 5MB

    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Error",
          description: "Please upload a PDF file only",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "Error",
          description: "File size should be less than 25MB",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }

      setCvFile(file);
    }
  };
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let cvBase64 = "";
      if (cvFile) {
        cvBase64 = await convertToBase64(cvFile);
      }

      // Match the template fields exactly
      const templateParams = {
        to_name: "Admin", // The recipient name in your template
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        helpType: formData.helpType,
        message: `New contact request from the website`,
        cv: cvBase64,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          duration: 3000,
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          helpType: "",
        });
        setCvFile(null);

        // Reset file input
        const fileInput = document.getElementById("cv");
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        duration: 3000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
    console.log("Form submitted");
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <motion.div
        className={`fixed top-0 left-0 right-0 bg-background z-50 transition-transform duration-300 ease-out ${
          showHeader ? "translate-y-0" : "-translate-y-28"
        }`}
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ stiffness: 120, damping: 15 }}
        style={{ willChange: "transform" }}
      >
        <Header />
      </motion.div>

      {/* Hero Section */}
      <Hero1
        title="Contact Us"
        subtitle={contactData.hero.subtitle}
        backgroundImage="/Images/Image6.jpg"
        height="normal"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Contact Cards */}
      <div className="relative z-20 container mx-auto px-4 -mt-20">
        <div className="flex flex-wrap justify-center gap-6 ">
          {contactData.contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              text={info.text}
              onClick={() =>
                info.action === "copy"
                  ? handleCopy(info.text)
                  : info.action === "link" && window.open(info.url, "_blank")
              }
            />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Send Us a Message
            </CardTitle>
            <CardDescription className="text-center">
              We'd love to hear from you. Please complete the form below and we
              will get in touch with you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary/50 bg-muted/5 px-4 py-2 text-base
    placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/20
    rounded-md transition-all duration-300 bg-[#F8FDEF]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary/50 bg-muted/5 px-4 py-2 text-base
    placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/20
    rounded-md transition-all duration-300 bg-[#F8FDEF]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 focus:border-primary/50 bg-muted/5 px-4 py-2 text-base
    placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/20
    rounded-md transition-all duration-300 bg-[#F8FDEF]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 focus:border-primary/50 bg-muted/5 px-4 py-2 text-base
    placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/20
    rounded-md transition-all duration-300 bg-[#F8FDEF]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="helpType">How can we help?</Label>

                <Select
                  id="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  required
                >
                  <SelectTrigger className="bg-[#F8FDEF]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className=" focus:bg-[#B9DCC6]"
                      value="recruitment"
                    >
                      Recruitment
                    </SelectItem>
                    <SelectItem
                      className=" focus:bg-[#B9DCC6]"
                      value="consulting"
                    >
                      Consulting
                    </SelectItem>
                    <SelectItem
                      className=" focus:bg-[#B9DCC6]"
                      value="jobseekers"
                    >
                      Job Seekers
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV (PDF only)</Label>
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf"
                  className="file:text-[#140E0E] file:bg-[#EFC7C2] file:rounded-md file:transition-all"
                  onChange={handleFileChange}
                />
                {cvFile && (
                  <p className="text-sm text-muted-foreground">{cvFile.name}</p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="consent" required />
                <Label htmlFor="consent" className="text-sm">
                  Yes, I would like to receive regular updates. I understand
                  that I can withdraw my consent at any time.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B9DCC6] text-[#0D110E] text-xl font-semibold 
      disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D110E] border-t-transparent" />
                    Sending...
                  </div>
                ) : (
                  "Contact us"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
