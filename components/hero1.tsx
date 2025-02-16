import React from "react";
import { motion } from "framer-motion";

type Hero1Props = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: "normal" | "large" | "full"; // Add more sizes as needed
  overlayOpacity?: "light" | "medium" | "dark";
  curveColor?: string;
  className?: string;
};

const Hero1 = ({
  title,
  subtitle,
  backgroundImage,
  height = "normal",
  overlayOpacity = "medium",
  curveColor = "bg-background",
  className = "",
}: Hero1Props) => {
  // Height classes mapping
  const heightClasses = {
    normal: "h-[60vh]",
    medium: "h-[65vh]",
    large: "h-[80vh]",
    full: "h-screen",
  };

  // Overlay opacity mapping
  const overlayClasses = {
    light: "bg-black/30",
    medium: "bg-black/40",
    dark: "bg-black/50",
  };

  return (
    <section
      className={`
        relative w-full bg-cover bg-center bg-no-repeat overflow-hidden
        ${heightClasses[height]}
        ${className}
        rounded-br-[120px] bg-transparent
      `}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark overlay with configurable opacity */}
      <motion.div
        className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-4 flex flex-col justify-center">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-lg sm:text-xl md:text-3xl text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero1;
