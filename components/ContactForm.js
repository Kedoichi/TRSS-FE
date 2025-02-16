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
    {
      icon: faEnvelope,
      text: "admin@talentspreesolutions.com",
      action: "copy",
    },
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
    <section className="relative bg-background py-24">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-primary">
                {contactData.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {contactData.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactData.contactInfo.map((info, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-primary/5 w-full"
                  onClick={() =>
                    info.action === "copy"
                      ? navigator.clipboard.writeText(info.text)
                      : window.open(info.url, "_blank")
                  }
                >
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="text-primary text-xl"
                  />
                  <span className="font-medium">{info.text}</span>
                </motion.button>
              ))}
            </motion.div>

            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {contactData.jobOpening.title}
                    </h3>
                    <Button
                      variant="ghost"
                      className="group text-primary hover:text-primary/80"
                      onClick={() =>
                        window.open(contactData.jobOpening.link, "_blank")
                      }
                    >
                      {contactData.jobOpening.text}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transform group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                  <div className="w-32 h-32 bg-primary/10 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-bold text-primary">Let's Talk</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px]"
                    />
                  </div>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                      ${
                        isDragging
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                  >
                    <input
                      type="file"
                      id="file-input"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p className="text-muted-foreground">
                      {file
                        ? file.name
                        : "Drag and drop your Resume/CV here or click to upload"}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#B9DCC6] text-[#0D110E] font-semibold text-xl"
                    size="lg"
                  >
                    Send Message
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
