import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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
    {
      icon: faMapMarkerAlt,
      label: "Location",
      text: "Cebu City, Philippines",
    },
    {
      icon: faPhoneAlt,
      label: "Phone",
      text: "+61283245788",
    },
    {
      icon: faEnvelope,
      label: "Email",
      text: "admin@talentspreesolutions.com",
    },
  ],
};

const ContactUs = () => {
  const [cvFile, setCvFile] = useState(null);
  const form = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 1023);
  }, []);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [checkIsMobile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 25 * 1024 * 1024;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
            duration: 3000,
          });
          setCvFile(null);
          form.current.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            duration: 3000,
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.grecaptcha) {
      window.grecaptcha.render("recaptcha", {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />

      <Hero1
        title="Contact Us"
        subtitle={contactData.hero.subtitle}
        backgroundImage="/Images/Image6.jpg"
        height="normal"
        overlayOpacity="medium"
        curveColor="bg-background"
        className="pt-16"
      />

      {/* Desktop View */}
      {!isMobile ? (
        <div className="hidden sm:flex container mx-auto max-w-5xl px-4 py-20 relative z-30 gap-0">
          {/* Left Column - Image and Contact Info */}
          <div className="relative w-1/3 flex items-center">
            <img
              src="/Images/Image6.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-l-xl shadow-lg"
            />

            {/* Floating Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-[-120px] bg-white rounded-lg shadow-lg p-3 w-[300px] h-[300px] flex flex-col justify-center"
            >
              <div className="space-y-4">
                {contactData.contactInfo.map((info, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{width: "100%"}}
                    className="flex items-center gap-3 text-[#2F5233] hover:text-[#72BF78] transition-colors p-4 rounded-lg hover:bg-[#72BF78]/10 w-auto"
                    onClick={() =>
                      info.label === "Phone"
                        ? (window.location.href = `tel:${info.text}`)
                        : info.label === "Email"
                        ? (window.location.href = `mailto:${info.text}`)
                        : info.action === "copy"
                        ? navigator.clipboard.writeText(info.text)
                        : info.url
                        ? window.open(info.url, "_blank")
                        : null
                    }
                  >
                    <FontAwesomeIcon icon={info.icon} className="text-[#72BF78] text-xl" />
                    <div className="text-left">
                      <span className="block text-sm font-semibold">{info.label}</span>
                      <span className="text-sm break-words">{info.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-2/3">
            <Card className="shadow-xl border border-gray-100 bg-white w-full h-full rounded-l-none">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl text-gray-800 font-semibold">
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input id="firstName" placeholder="First Name" required />
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>

                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />

                  {/* Resume Uploader with Heading */}
                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-semibold text-gray-800">
                      Upload Resume (PDF Only)
                    </label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  {/* Message Text Area */}
                  <textarea
                    id="message"
                    placeholder="Comment or message"
                    required
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary resize-none overflow-y-auto"
                  />

                  <div className="flex justify-center" id="recaptcha"></div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6FBF73] text-white py-3 rounded-lg hover:brightness-110 transition-all shadow-md"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      ) : (
        <div className="container mx-auto max-w-5xl px-4 py-20 relative z-30 flex flex-col gap-8">
          {/* Top Section */}
          <div className="relative w-full flex flex-col items-center">

            {/* Floating Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-md flex flex-col justify-center mt-[-50px] z-10"
            >
              <div className="space-y-4">
                {contactData.contactInfo.map((info, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 text-[#2F5233] hover:text-[#72BF78] transition-colors p-4 rounded-lg hover:bg-[#72BF78]/10 w-full"
                    onClick={() =>
                      info.label === "Phone"
                        ? (window.location.href = `tel:${info.text}`)
                        : info.label === "Email"
                        ? (window.location.href = `mailto:${info.text}`)
                        : null
                    }
                  >
                    <FontAwesomeIcon icon={info.icon} className="text-[#72BF78] text-xl" />
                    <div className="text-left">
                      <span className="block text-sm font-semibold">{info.label}</span>
                      <span className="text-sm break-words">{info.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Contact Form */}
          <div className="w-full">
            <Card className="shadow-xl border border-gray-100 bg-white w-full rounded-b-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl text-gray-800 font-semibold">
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input id="firstName" placeholder="First Name" required />
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>

                  <Input id="email" type="email" placeholder="Email" required />
                  <Input id="phone" type="tel" placeholder="Phone Number" required />

                  {/* Resume Uploader */}
                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-semibold text-gray-800">
                      Upload Resume (PDF Only)
                    </label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  {/* Message Text Area */}
                  <textarea
                    id="message"
                    placeholder="Comment or message"
                    required
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none overflow-y-auto"
                  />

                  <div className="flex justify-center" id="recaptcha"></div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6FBF73] text-white py-3 rounded-lg hover:brightness-110 transition-all shadow-md"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactUs;
