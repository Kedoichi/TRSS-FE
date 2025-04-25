import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormContext } from "react-hook-form";

export const useContactForm = () => {
  const { toast } = useToast();

  const form = useFormContext();
  if (!form) {
    throw new Error(
      "❌ useContactForm must be used within a <FormProvider>. Wrap your component with <FormProvider> from react-hook-form."
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
      toast({
        title: "Error",
        description: "Only PDF files are allowed.",
        variant: "destructive",
      });
      return false;
    }

    if (fileInput.size > maxSize) {
      toast({
        title: "Error",
        description: "Maximum file size is 25MB.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (handleFileValidation(selected)) {
      setFile(selected);
      setFileName(selected.name);
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
    const droppedFile = e.dataTransfer?.files?.[0];
    if (handleFileValidation(droppedFile)) {
      setFile(droppedFile);
      setFileName(droppedFile.name);
    }
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

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      reset();
      setFile(null);
      setFileName("");
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
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