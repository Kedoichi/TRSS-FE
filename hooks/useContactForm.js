import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const useContactForm = () => {
  const form = useFormContext();
  if (!form) {
    throw new Error("useContactForm must be used within a FormProvider.");
  }

  const { reset } = form;

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const [toast, setToast] = useState({ type: "", message: "" });

  const showToast = (message, type = "success") => {
    setToast({ message, type});
    setTimeout(() => setToast({ type: "", message: "" }), 3000);
  }

  const handleFileValidation = (fileInput) => {
    const maxSize = 25 * 1024 * 1024;

    if (!fileInput) return false;

    if (fileInput.type !== "application/pdf") {
      console.error("Only PDF files are allowed.");
      showToast("Only PDF files are allowed.", "error");
      return false;
    }

    if (fileInput.size > maxSize) {
      console.error("Maximum file size is 25MB.");
      showToast("Maximum file size is 25MB.", "error");
      return false;
    }

    return true;
  };

  const handleValidFile = (fileInput) => {
    if (handleFileValidation(fileInput)) {
      setFile(fileInput);
      showToast("PDF uploaded successfully.", "success");
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    handleValidFile(selected);
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
    const droppedFile = e.dataTransfer?.files?.[0];
    handleValidFile(droppedFile);
  };

  const onSubmit = async (data) => {
    try {
      const fullName =
        data.name?.trim() ||
        `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim();

      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", data.email ?? "");
      formData.append("phone", data.phone ?? "");
      formData.append("message", data.message ?? "");
      if (file) formData.append("resume", file);

      const response = await fetch("/api/send-contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to send message.");

      showToast("Message sent successfully!", "success");
      console.log("✅ Message sent successfully!");

      reset();
      setFile(null);
    } catch (err) {
      showToast("Failed to send message. Please try again.", "error");
      console.error("❌ Form submission error:", err);
    }
  };

  return {
    file,
    isDragging,
    toast,
    onSubmit,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};