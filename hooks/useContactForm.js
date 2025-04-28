import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormContext } from "react-hook-form";

export const useContactForm = () => {
  const { showToast } = useToast();

  const form = useFormContext();
  if (!form) {
    throw new Error(
      "useContactForm must be used within a <FormProvider>. Wrap your component with <FormProvider> from react-hook-form."
    );
  }

  const { reset } = form;

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileValidation = (fileInput) => {
    const maxSize = 25 * 1024 * 1024;

    if (!fileInput) return false;

    if (fileInput.type !== "application/pdf") {
      showToast("Only PDF files are allowed.", "error");
      return false;
    }

    if (fileInput.size > maxSize) {
      showToast("Maximum file size is 25MB.", "error");
      return false;
    }

    return true;
  };

  const handleValidFile = (fileInput) => {
    if (handleFileValidation(fileInput)) {
      setFile(fileInput);
      setFileName(fileInput.name);
    }
  }

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    handleValidFile(selected)
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
    handleValidFile(droppedFile)
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

      showToast("Your message has been sent successfully.", "success")

      reset();
      setFile(null);
      setFileName("");
    } catch (err) {
      console.error("Form submission error:", err);
      showToast("Something went wrong. Please try again.", "error")
    }
  };

  return {
    file,
    fileName,
    isDragging,
    onSubmit,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};