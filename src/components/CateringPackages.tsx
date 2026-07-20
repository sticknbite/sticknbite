import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic",
    price: "$45",
    features: [
      "1 appetizer",
      "2 proteins",
      "3 sides",
      "1 salad",
    ],
  },
  {
    name: "Classic",
    price: "$60",
    features: [
      "2 appetizers",
      "4 proteins",
      "4 sides",
      "2 salads",
    ],
  },
  {
    name: "Premium",
    price: "$75",
    features: [
      "3 appetizers",
      "6 proteins",
      "4 sides",
      "3 salads",
      "1 dessert",
    ],
  },
];

const CateringPackages = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-primary mb-12"
        >
          Catering Packages
        </motion.h2>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-primary rounded-lg p-8 min-h-[320px] flex flex-col"
            >
              <h3 className="font-display text-2xl md:text-3xl text-white mb-6">
                {pkg.name} <span className="text-secondary">{pkg.price}</span>/Person
              </h3>
              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="text-white/90 flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="coral"
            size="xl"
            onClick={scrollToQuote}
            className="tracking-wider"
          >
            GET A QUOTE
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringPackages;
