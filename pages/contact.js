import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import Header from "@/components/Header";
import Hero1 from "@/components/hero1";
import Footer from "@/components/Footer";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [fileName, setFileName] = useState("");

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

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      reset();
      setFileName("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

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
        return;
      }

      if (file.size > maxSize) {
        toast({
          title: "Error",
          description: "File size should be less than 25MB",
          variant: "destructive",
        });
        return;
      }

      setFileName(file.name);
      setValue("resume", file);
    }
  };

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

      {!isMobile ? (
        <div className="hidden sm:flex container mx-auto max-w-5xl px-4 py-20 relative z-30 gap-0">
          <div className="relative w-1/3 flex items-center">
            <img
              src="/Images/Image6.jpg"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-l-xl shadow-lg"
            />
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
                    style={{ width: "100%" }}
                    className="flex items-center gap-3 text-[#2F5233] hover:text-[#72BF78] transition-colors p-4 rounded-lg hover:bg-[#72BF78]/10 w-auto"
                    onClick={() => {
                      if (info.label === "Phone") window.location.href = `tel:${info.text}`;
                      if (info.label === "Email") window.location.href = `mailto:${info.text}`;
                    }}
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

          <div className="w-2/3">
            <Card className="shadow-xl border border-gray-100 bg-white w-full h-full rounded-l-none">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl text-gray-800 font-semibold">
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
                    <Input placeholder="Last Name" {...register("lastName", { required: "Last name is required" })} />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", { required: "Phone number is required" })}
                  />
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
                    {fileName && <p className="text-sm text-green-600">{fileName}</p>}
                  </div>
                  <textarea
                    placeholder="Comment or message"
                    {...register("message", { required: "Message is required" })}
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none overflow-y-auto"
                  />
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
          <div className="relative w-full flex flex-col items-center">
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
                    onClick={() => {
                      if (info.label === "Phone") window.location.href = `tel:${info.text}`;
                      if (info.label === "Email") window.location.href = `mailto:${info.text}`;
                    }}
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
          <div className="w-full">
            <Card className="shadow-xl border border-gray-100 bg-white w-full rounded-b-xl">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl text-gray-800 font-semibold">
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
                    <Input placeholder="Last Name" {...register("lastName", { required: "Last name is required" })} />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", { required: "Phone number is required" })}
                  />
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
                    {fileName && <p className="text-sm text-green-600">{fileName}</p>}
                  </div>
                  <textarea
                    placeholder="Comment or message"
                    {...register("message", { required: "Message is required" })}
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none overflow-y-auto"
                  />
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