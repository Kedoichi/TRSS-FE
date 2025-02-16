import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative bg-[#72BF78] min-h-[80vh] py-16 px-4">
      <div className="relative z-20 container mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            From Our Clients
          </h2>
          <p className="text-lg text-[#FEFF9F]">
            What our clients are saying
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          className="w-full max-w-3xl mx-auto"
          plugins={[plugin]}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-full"
                >
                  <Card className="bg-[#D3EE98] text-[#2F5233] rounded-lg border border-[#A0D683] shadow-xl max-w-2xl mx-auto transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6">
                        <p className="text-lg md:text-xl italic leading-relaxed text-center">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#A0D683] pt-6">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                          <div className="w-14 h-14 rounded-full bg-[#FEFF9F]/20 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img
                                src={testimonial.logo}
                                alt={testimonial.company}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-lg">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-[#2F5233]/80">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="w-20 h-20 md:w-24 md:h-24 opacity-80">
                          <img
                            src={testimonial.companyLogo}
                            alt="Company Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Updated for Better Visibility */}
          <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#FEFF9F] text-[#2F5233] bg-white hover:bg-[#FEFF9F] hover:text-[#2F5233] transition-all rounded-full shadow-lg" />
          </div>
          <div className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2">
            <CarouselNext className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#FEFF9F] text-[#2F5233] bg-white hover:bg-[#FEFF9F] hover:text-[#2F5233] transition-all rounded-full shadow-lg" />
          </div>
        </Carousel>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#FEFF9F] w-6" : "bg-[#A0D683]"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonialsData = [
  {
    text: "Talent Spree Solutions helped us find the perfect candidates. Their attention to detail and understanding of our needs was remarkable.",
    author: "John Doe",
    company: "CEO, Example Corp",
    logo: "/Images/DemoSet/User/1.png",
    companyLogo: "/Images/DemoSet/Company/1.webp",
  },
  {
    text: "A fantastic experience from start to finish. The process was seamless, and we were matched with exceptional talent.",
    author: "Jane Smith",
    company: "HR Manager, Tech Innovators",
    logo: "/Images/DemoSet/User/2.png",
    companyLogo: "/Images/DemoSet/Company/2.webp",
  },
  {
    text: "We were impressed by how quickly they found us top-tier candidates. They truly care about long-term success.",
    author: "Emily Johnson",
    company: "COO, Digital Enterprises",
    logo: "/Images/DemoSet/User/3.png",
    companyLogo: "/Images/DemoSet/Company/3.webp",
  },
  {
    text: "Their professionalism and dedication to delivering results exceeded our expectations. Highly recommended.",
    author: "Mark Wilson",
    company: "Director, Growth Solutions",
    logo: "/Images/DemoSet/User/4.png",
    companyLogo: "/Images/DemoSet/Company/1.webp",
  },
];

export default Testimonials;
