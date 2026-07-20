import { motion } from "framer-motion";
import { 
  Award, 
  Flame, 
  ClipboardCheck, 
  Users, 
  ChefHat, 
  Beef, 
  Heart, 
  UtensilsCrossed 
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Authentic Experience",
    description:
      "Our catering service brings the vibrant flavors and cultural richness of Brazil directly to your event, creating an authentic Brazilian barbecue experience.",
  },
  {
    icon: Flame,
    title: "Skilled Grill Masters",
    description:
      "Our team of skilled grill masters are experts in the art of churrasco, utilizing traditional techniques and seasonings to deliver mouthwatering, perfectly cooked meats.",
  },
  {
    icon: ClipboardCheck,
    title: "Attention to Detail",
    description:
      "We pay meticulous attention to detail, ensuring that every aspect of your catering experience is flawlessly executed, creating a memorable event for you and your guests.",
  },
  {
    icon: Users,
    title: "Customization",
    description:
      "We work closely with you to customize your menu and cater to your specific event requirements, ensuring a personalized and memorable experience.",
  },
  {
    icon: ChefHat,
    title: "Professional Service",
    description:
      "Our dedicated team of professionals provides exceptional service from start to finish, handling all aspects of setup, serving, and cleanup.",
  },
  {
    icon: Beef,
    title: "High-Quality Ingredients",
    description:
      "We source only the highest quality cuts of meat, ensuring that every bite is flavorful, tender, and delicious.",
  },
  {
    icon: Heart,
    title: "Unforgettable Memories",
    description:
      "By hiring our Brazilian barbecue catering service, you create a unique and memorable experience that will leave a lasting impression on your guests.",
  },
  {
    icon: UtensilsCrossed,
    title: "Diverse Menu Selection",
    description:
      "Our menu offers a wide variety of traditional Brazilian cuts of meat, as well as a range of delectable appetizers, side dishes and dessert.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-cream py-20 lg:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center font-display text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl"
        >
          Why Hire Us?
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex rounded-full p-3">
                <benefit.icon className="h-12 w-12 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-gold">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
