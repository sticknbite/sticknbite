import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Roberta B M",
    initial: "R",
    color: "bg-purple-600",
    time: "1 year ago",
    rating: 5,
    text: "Wonderful food and perfect service! I loved the experience with you!",
    hasMore: false,
  },
  {
    name: "Mariana Melo Ribeiro",
    initial: "M",
    color: "bg-amber-600",
    time: "1 year ago",
    rating: 5,
    text: "Incredible quality, super portion size, super professional. Cannot recommend highly enough. The steak was perfectly cooked. The chicken...",
    hasMore: true,
  },
  {
    name: "Pauline Guazeli",
    initial: "P",
    color: "bg-green-600",
    time: "1 year ago",
    rating: 5,
    text: "I Strongly recommend SticknBite! What a wonderful catering experience! We literally just had it for our event and it was more than I...",
    hasMore: true,
  },
  {
    name: "Amanda Moreno",
    initial: "A",
    color: "bg-teal-600",
    time: "1 year ago",
    rating: 5,
    text: "Stick'and'Bite played a huge role in our special day. From the first contact everything was positive. We requested a quote online, just a...",
    hasMore: true,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 ml-1" fill="#1DA1F2">
    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
  </svg>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 4 };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1920')`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center text-white/90 mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 text-white hover:bg-white/10 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 text-white hover:bg-white/10 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-medium`}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                      <p className="text-white/50 text-xs">{testimonial.time}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <VerifiedBadge />
                </div>

                {/* Text */}
                <p className="text-white/80 text-sm leading-relaxed">{testimonial.text}</p>

                {/* Read more link */}
                {testimonial.hasMore && (
                  <button className="text-white/50 text-sm mt-2 hover:text-white/70 transition-colors">
                    Read more
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
