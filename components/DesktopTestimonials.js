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
    <section className="relative bg-[#343300] min-h-[80vh] py-24">
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-[#D2D3C8]">
            From Our Clients
          </h2>
          <p className="text-xl text-muted-foreground">
            What our clients are saying
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          plugins={[plugin]}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="px-4 md:px-8 "
                >
                  <Card className="backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 bg-base-100 rounded-lg border-2 border-border/50">
                    <CardContent className="p-8 md:p-12">
                      <div className="mb-8 relative">
                        <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed text-center">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-6">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 p-0.5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img
                                src={testimonial.logo}
                                alt={testimonial.company}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-foreground">
                              {testimonial.author}
                            </p>
                            <p className="text-base text-muted-foreground">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="w-24 h-24 opacity-70">
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

          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="w-12 h-12 border-2  hover:bg-red-600" />
          </div>
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
            <CarouselNext className="w-12 h-12 border-2" />
          </div>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary w-6" : "bg-[#D2D3C8]"
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
