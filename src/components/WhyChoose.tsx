import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Wine, BadgeCheck, UserSearch } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";
import carousel9 from "@/assets/carousel-9.jpg";
import carousel10 from "@/assets/carousel-10.jpg";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10];

const features = [
  {
    icon: Wine,
    title: "Stress-Free",
    description:
      "From planning to execution, we take care of all the details so you can enjoy your event worry-free.",
  },
  {
    icon: BadgeCheck,
    title: "Authenticity Guaranteed",
    description:
      "Our expert chefs use traditional Brazilian techniques and high-quality ingredients to create an authentic culinary experience.",
  },
  {
    icon: UserSearch,
    title: "Personalized Service",
    description:
      "Every event is unique. We offer customized solutions that perfectly fit your needs and preferences.",
  },
];

const WhyChoose = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="why-choose" className="bg-background py-20 lg:py-28">
      <div className="container">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center font-display text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl"
        >
          Why Choose Stick'n'Bite?
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Brazilian catering showcase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="aspect-[3/4] w-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/70"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-coral w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <div className="flex flex-col justify-center gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex rounded-full p-3">
                  <feature.icon className="h-12 w-12 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-semibold text-gold">
                  {feature.title}
                </h3>
                <p className="mx-auto max-w-md text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
