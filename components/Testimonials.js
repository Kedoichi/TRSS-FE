"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Poppins } from "next/font/google";
import { testimonialsData } from "@/constants";

const poppins = Poppins({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const plugin = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="relative min-h-[80vh] py-16 px-4 bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/Image2.jpg')",
          filter: "grayscale(100%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-20 container mx-auto max-w-5xl flex flex-col items-center justify-center min-h-[80vh]"
      >
        <motion.div className="text-center mb-12" variants={fadeInVariants}>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-white ${poppins.className}`}
          >
            From Our Clients
          </h2>
          <p className={`text-lg text-[#A0D683] ${poppins.className}`}>
            What our clients are saying
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-3xl mx-auto"
          plugins={[plugin]}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="px-4">
                <motion.div variants={fadeInVariants} className="relative w-full">
                  <Card className="bg-white text-[#2F5233] rounded-xl border border-[#72BF78] shadow-lg max-w-2xl mx-auto transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6">
                        <p
                          className={`text-lg md:text-xl italic leading-relaxed text-center text-[#2F5233] ${poppins.className}`}
                        >
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#72BF78] pt-6">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                          <div className="w-14 h-14 rounded-full border-2 border-[#72BF78] p-1 shadow-sm">
                            <Image
                              src={testimonial.logo}
                              alt={`${testimonial.author} - ${testimonial.company}`}
                              width={56}
                              height={56}
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <p
                              className={`font-semibold text-lg text-[#2F5233] ${poppins.className}`}
                            >
                              {testimonial.author}
                            </p>
                            <p
                              className={`text-sm text-[#2F5233]/80 ${poppins.className}`}
                            >
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Hide arrows on mobile view */}
          <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 hidden md:block">
            <CarouselPrevious
              className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#A0D683] text-[#2F5233] bg-white 
              hover:bg-[#2F5233] hover:text-white hover:scale-105 hover:shadow-xl 
              transition-all duration-300 ease-in-out rounded-full shadow-lg"
            />
          </div>

          <div className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 hidden md:block">
            <CarouselNext
              className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#A0D683] text-[#2F5233] bg-white 
              hover:bg-[#2F5233] hover:text-white hover:scale-105 hover:shadow-xl 
              transition-all duration-300 ease-in-out rounded-full shadow-lg"
            />
          </div>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 md:w-4 md:h-4 rounded-full border-2 transition-all duration-300 ${
                index === current
                  ? "bg-[#72BF78] border-[#72BF78] w-6"
                  : "bg-white border-white hover:bg-[#72BF78] hover:border-[#72BF78]"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;