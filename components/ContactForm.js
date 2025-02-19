import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const contactData = {
  title: "Contact with Our Team of Experts",
  subtitle: "Get in touch with our team to discuss your project.",
  contactInfo: [
    { icon: faPhoneAlt, text: "+61283245788", action: "copy" },
    { icon: faEnvelope, text: "admin@talentspreesolutions.com", action: "copy" },
    {
      icon: faMapMarkerAlt,
      text: "Cebu City, Philippines",
      action: "link",
      url: "https://www.google.com/maps?q=Cebu+City,Philippines",
    },
  ],
  jobOpening: {
    title: "Want to Join Our Talented Team?",
    text: "Visit Our Job Board",
    link: "/job-openings",
  },
};

const ContactForm = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  return (
    <section className="relative bg-[#E8F5E9] pt-20 pb-0">
      <div className="relative container mx-auto px-4">
        
        {/* Grid layout to ensure even spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#72BF78]">{contactData.title}</h2>
              <p className="text-lg text-[#2F5233]">{contactData.subtitle}</p>
            </div>

            <div className="space-y-4">
              {contactData.contactInfo.map((info, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 text-[#2F5233] hover:text-[#72BF78] transition-colors p-4 rounded-lg hover:bg-[#72BF78]/10 w-full"
                  onClick={() =>
                    info.action === "copy"
                      ? navigator.clipboard.writeText(info.text)
                      : window.open(info.url, "_blank")
                  }
                >
                  <FontAwesomeIcon icon={info.icon} className="text-[#72BF78] text-xl" />
                  <span className="font-medium">{info.text}</span>
                </motion.button>
              ))}
            </div>

            {/* Job Openings Section - White Background, Black Text */}
            <Card className="mt-12 bg-white text-[#0D110E] rounded-t-lg rounded-b-none">
              <CardContent className="p-6 h-[20rem] flex flex-col md:flex-row justify-between relative">
                
                {/* Left Side - Text Section */}
                <div className="flex flex-col justify-center space-y-4 md:w-1/2 md:pr-8">
                  <h3 className="text-2xl font-bold">{contactData.jobOpening.title}</h3>
                  <Button
                    variant="ghost"
                    className="group text-[#0D110E] transition-colors duration-300 text-left w-full flex justify-start 
                              hover:bg-[#FEFF9F] hover:text-[#0D110E]"
                    onClick={() => window.open(contactData.jobOpening.link, "_blank")}
                  >
                    <span className="flex items-center">
                      {contactData.jobOpening.text}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Button>
                </div>

                {/* Right Side - Red Box (BOTTOM-RIGHT ALIGNED) */}
                <div className="md:w-1/2 flex justify-end items-end absolute bottom-0 right-0 md:pr-6">
                  <div className="w-64 md:w-80 bg-red-500 h-60 md:h-72"></div> 
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form - Right Side (Fixed Width & Evenly Spaced) */}
          <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="w-full flex justify-center"
>
  <Card className="bg-white border-2 border-[#72BF78] text-[#0D110E] shadow-lg rounded-lg w-[90%] md:w-[80%] lg:w-[75%]">
    <CardContent className="p-6 space-y-5">
      <h3 className="text-2xl font-bold text-center">Let's Talk</h3>
      <form className="space-y-4">
        <Input id="name" placeholder="Your name" className="border-[#72BF78] bg-white text-[#0D110E]" />
        <Input id="email" type="email" placeholder="Your email" className="border-[#72BF78] bg-white text-[#0D110E]" />
        <Input id="phone" placeholder="Your phone number" className="border-[#72BF78] bg-white text-[#0D110E]" />
        <Textarea id="message" placeholder="Your message" className="border-[#72BF78] bg-white text-[#0D110E] min-h-[100px]" />

        {/* Drag & Drop Upload */}
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors border-[#72BF78]
            ${isDragging ? "bg-primary/5" : "hover:bg-primary/10"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-input").click()}
        >
          <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} className="hidden" />
          <p>
            {file ? file.name : "Drag and drop your Resume/CV here or click to upload"}
          </p>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-[#FEFF9F] text-[#72BF78] font-semibold text-lg border-2 border-[#72BF78] hover:bg-[#72BF78] hover:text-white transition-all duration-300" 
          size="lg"
        >
          Send
        </Button>
      </form>
    </CardContent>
  </Card>
          </motion.div>



          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;