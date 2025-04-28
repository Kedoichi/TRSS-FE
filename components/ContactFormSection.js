"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useContactForm } from "@/hooks/useContactForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactContent } from "@/constants";
import image from "@/public/Images/Image6.jpg";

const ContactFormSection = () => {
  const methods = useForm();

  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 1023);
  }, []);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [checkIsMobile]);

  return (
    <section>
      {!isMobile ? (
        <div className="hidden sm:flex container mx-auto max-w-5xl px-4 py-20 relative z-30 gap-0">
          <div className="relative w-1/3 flex items-center">
            <Image
              src={image}
              alt="Contact Us"
              draggable={false}
              className="w-full h-full object-cover rounded-l-xl shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-[-120px] bg-white rounded-lg shadow-lg p-3 w-[300px] h-[300px] flex flex-col justify-center"
            >
              <div className="space-y-4">
                {contactContent.contactInfo.map((info, index) => (
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
                <FormProvider {...methods}>
                  <InnerContactForm/>
                </FormProvider>
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
                {contactContent.contactInfo.map((info, index) => (
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
                <FormProvider {...methods}>
                  <InnerContactForm/>
                </FormProvider>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};

const InnerContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const {
    file,
    fileName,
    isDragging,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    onSubmit,
  } = useContactForm();

  const inputs = [
    { id: "email", type: "email", label: "Email" },
    { id: "phone", type: "tel", label: "Phone Number" },
  ];  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="relative">
          <input
            id="firstName"
            type="text"
            placeholder=" "
            {...register("firstName", { required: "First name is required" })}
            className={`peer w-full border rounded-md px-4 pt-6 pb-2 text-sm bg-white text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#6FBF73] focus:border-[#6FBF73] ${
              errors.firstName ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="firstName" className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6FBF73]">
            First Name
          </label>
          {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div className="relative">
          <input
            id="lastName"
            type="text"
            placeholder=" "
            {...register("lastName", { required: "Last name is required" })}
            className={`peer w-full border rounded-md px-4 pt-6 pb-2 text-sm bg-white text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#6FBF73] focus:border-[#6FBF73] ${
              errors.lastName ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="lastName" className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6FBF73]">
            Last Name
          </label>
          {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>}
        </div>
      </div>

      {inputs.map(({ id, type, label }) => (
        <div key={id} className="relative">
          <input
            id={id}
            type={type}
            placeholder=" "
            {...register(id, { required: `${label} is required` })}
            className={`peer w-full border rounded-md px-4 pt-6 pb-2 text-sm bg-white text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#6FBF73] focus:border-[#6FBF73] ${
              errors[id] ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            }`}
          />
          <label
            htmlFor={id}
            className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6FBF73]"
          >
            {label}
          </label>
          {errors[id] && (
            <p className="text-sm text-red-600 mt-1">{errors[id]?.message}</p>
          )}
        </div>
      ))}

      {/* Resume Upload (Drag & Drop) */}
      <div
        role="button"
        aria-label="Upload your Resume"
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors border-[#6FBF73] ${
          isDragging ? "bg-[#E8F5E9]" : "hover:bg-[#F3FDF4]"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <input type="file" id="file-input" accept=".pdf" onChange={handleFileChange} className="hidden" />
        <p className="text-sm text-[#0D110E]">
          {file ? file.name : "Drag and drop your Resume/CV here or click to upload"}
        </p>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          placeholder=" "
          {...register("message", { required: "Message is required" })}
          className={`peer block w-full h-32 px-4 pt-6 pb-2 border rounded-md text-sm bg-white text-gray-900 placeholder-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#6FBF73] focus:border-[#6FBF73] ${
            errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          }`}
        />
        <label htmlFor="message" className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#6FBF73]">
          Message
        </label>
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#6FBF73] text-white py-3 rounded-lg hover:brightness-110 transition-all shadow-md"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactFormSection;