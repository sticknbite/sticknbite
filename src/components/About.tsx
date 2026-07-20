import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The food was absolutely incredible! Our guests couldn't stop talking about the Brazilian BBQ. Stick'n'Bite made our wedding reception unforgettable.",
    author: "Sarah & Michael",
    event: "Wedding Reception",
  },
  {
    quote:
      "Professional, punctual, and the most delicious catering we've ever had. Highly recommend for corporate events!",
    author: "David Chen",
    event: "Corporate Event",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-primary py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 font-display text-3xl font-semibold text-gold-light sm:text-4xl md:text-5xl">
              About Stick'n'Bite
            </h2>
            <div className="space-y-4 text-primary-foreground/80">
              <p className="text-lg leading-relaxed">
                Born from a passion for authentic Brazilian churrasco,
                Stick'n'Bite brings the tradition of rodízio-style dining to
                your special events.
              </p>
              <p className="leading-relaxed">
                Our team of expert gauchos (grill masters) prepare each cut of
                meat using time-honored techniques passed down through
                generations. We source only the finest quality meats and
                ingredients to ensure every bite is a celebration of flavor.
              </p>
              <p className="leading-relaxed">
                Whether it's an intimate family gathering or a grand corporate
                celebration, we bring the warmth, flavor, and hospitality of
                Brazil to every event we cater.
              </p>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="rounded-xl bg-primary-foreground/5 p-6 backdrop-blur-sm"
              >
                <Quote className="mb-3 h-8 w-8 text-gold-light/50" />
                <p className="mb-4 italic leading-relaxed text-primary-foreground/90">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gold-light">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
