import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Essential",
    description: "Perfect for smaller gatherings",
    features: [
      "Up to 30 guests",
      "3 meat selections",
      "Basic side dishes",
      "Setup & cleanup",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Our most popular package",
    features: [
      "Up to 75 guests",
      "5 meat selections",
      "Full buffet sides",
      "Professional servers",
      "Premium beverages",
    ],
    highlighted: true,
  },
  {
    name: "Grand",
    description: "For unforgettable experiences",
    features: [
      "Up to 150+ guests",
      "7 meat selections",
      "Gourmet side dishes",
      "Full service team",
      "Custom menu options",
      "Event coordination",
    ],
    highlighted: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Packages = () => {
  return (
    <section id="packages" className="bg-background py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl">
            Our Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your event. All packages include our
            signature Brazilian BBQ experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlighted
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card shadow-soft hover:shadow-elevated"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-coral px-4 py-1 text-xs font-semibold text-destructive-foreground shadow-gold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 text-center">
                <h3
                  className={`mb-2 font-display text-2xl font-semibold ${
                    pkg.highlighted ? "text-gold-light" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm ${
                    pkg.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.highlighted ? "bg-gold-light/20" : "bg-gold/20"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          pkg.highlighted ? "text-gold-light" : "text-gold"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        pkg.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? "coral" : "gold"}
                size="lg"
                className="w-full"
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
