"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useContactForm } from "@/hooks/useContactForm";
import { contactData } from "@/constants";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Toast from "@/components/ui/toast";
import ProfileImage2 from "@/public/Images/ProfileImage2.png";

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  const methods = useForm();

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

  return (
    <section className="relative bg-[#E6F0E6] py-16 px-4 md:px-8"
      style={{ paddingBottom: '0rem', borderBottomLeftRadius: '0rem', borderBottomRightRadius: '0rem' }}
    >

    {!isMobile ? (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-6"
          >
            <ContactDataComponent />

            <JobOpeningCard isMobile={isMobile}/>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Card className="bg-white border-2 border-[#72BF78] text-[#0D110E] shadow-md rounded-lg w-full max-w-lg">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-2xl font-bold text-center">Let's Talk</h3>
                  <FormProvider {...methods}>
                    <InnerContactForm />
                  </FormProvider>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    ) : (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          
          {/* Contact Information */}
          <ContactDataComponent />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Card className="bg-white border-2 border-[#72BF78] text-[#0D110E] shadow-md rounded-lg w-full max-w-lg">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-2xl font-bold text-center">Let's Talk</h3>

                <FormProvider {...methods}>
                  <InnerContactForm />
                </FormProvider>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Openings Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <JobOpeningCard isMobile={isMobile} />
          </motion.div>

        </div>
      </div>
    )}
    </section>
  );
};

const ContactDataComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full space-y-6"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#72BF78]">{contactData.title}</h2>
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
    </motion.div>
  );
};

const JobOpeningCard = ({ isMobile }) => {
  return (
    <div>
      <Card className="mt-12 bg-white text-[#0D110E] rounded-t-lg rounded-b-none shadow-md">
        <CardContent className={`p-6 flex ${isMobile ? "flex-col gap-8 items-center" : "flex-row gap-x-8 items-center"} pb-0`}>
          {/* Left Side - Text Section */}
          <div className={`flex flex-col flex-1 space-y-4 ${isMobile ? "items-center text-center" : ""}`}>
            <h3 className="text-2xl font-bold text-[#0D110E]">
              {contactData.jobOpening.title}
            </h3>

            <button
              onClick={() => window.open(contactData.jobOpening.link, "_blank")}
              className="flex items-center space-x-4 text-[#2F5233] hover:text-[#72BF78] transition-colors 
                        p-4 rounded-lg hover:bg-[#72BF78]/10 w-full max-w-sm"
            >
              <span className="font-medium">{contactData.jobOpening.text}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className={`relative ${isMobile ? "w-full h-80 md:h-96" : "w-64 md:w-72 h-60 md:h-72"} rounded-lg overflow-hidden shrink-0`}>
            <Image
              src={ProfileImage2}
              alt="Job opening"
              fill
              draggable={false}
              className="object-cover object-top"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const InnerContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const {
    file,
    isDragging,
    toast,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    onSubmit,
  } = useContactForm();

  const inputs = [
    { 
      id: "name", 
      type: "text", 
      placeholder: "Your name", 
      validation: { required: "Name is required" } 
    },
    { 
      id: "email", 
      type: "email", 
      placeholder: "Your email", 
      validation: { 
        required: "Email is required", 
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } 
      }
    },
    { 
      id: "phone", 
      type: "tel", 
      placeholder: "Your phone number", 
      validation: { 
        required: "Phone number is required", 
        pattern: { value: /^[0-9]+$/, message: "Phone number must be digits only" } 
      }
    },
  ];

  return (
    <>
      <Toast type={toast.type} message={toast.message} />

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Mapped Inputs */}
        {inputs.map(({ id, type, placeholder, validation }) => (
          <div key={id}>
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id, validation)}
              className="border-[#72BF78] bg-white text-[#0D110E] placeholder:text-gray-400"
              onInput={(e) => {
                if (id === "phone") {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }
              }}
            />
            {errors[id] && (
              <p className="text-sm text-red-600 mt-1">
                {errors[id]?.message}
              </p>
            )}
          </div>
        ))}

        {/* Textarea for message */}
        <div>
          <Textarea
            id="message"
            placeholder="Your message"
            {...register("message", { required: "Message is required" })}
            className="border-[#72BF78] bg-white text-[#0D110E] min-h-[120px] placeholder:text-gray-400"
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Resume Upload */}
        <div
          role="button"
          aria-label="Upload your Resume"
          className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors border-[#72BF78] ${
            isDragging ? "bg-[#E8F5E9]" : "hover:bg-[#F3FDF4]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            type="file"
            id="file-input"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-sm text-[#0D110E]">
            {file ? file.name : "Drag and drop your Resume/CV here or click to upload"}
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#72BF78] text-white font-semibold text-lg border-2 border-[#72BF78] hover:bg-[#5CA965] transition-all duration-300"
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default ContactForm;