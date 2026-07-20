import { motion } from "framer-motion";
import { Utensils, Users, Calendar, ChefHat } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Authentic Churrasco",
    description:
      "Traditional Brazilian BBQ with premium cuts prepared by expert gauchos on-site.",
  },
  {
    icon: Users,
    title: "All Event Sizes",
    description:
      "From intimate gatherings to large corporate events, we scale to your needs.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Available for weekdays, weekends, and holidays. We work around your timeline.",
  },
  {
    icon: ChefHat,
    title: "Professional Team",
    description:
      "Our trained staff handles everything, so you can enjoy your event stress-free.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring the authentic taste of Brazil directly to your event with
            premium service and attention to detail.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group rounded-xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-lg bg-gradient-gold p-3 text-foreground shadow-gold">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
