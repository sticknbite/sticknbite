import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import teamChefsImg from "@/assets/team-chefs.jpg";

const values = [
  "Authenticity",
  "Quality",
  "Customer satisfaction",
  "Integrity",
  "Excellence",
  "Teamwork",
];

const MoreAboutUs = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    quoteSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 font-display text-3xl font-semibold text-gradient-gold sm:text-4xl md:text-5xl">
              More About Us
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Stick'n'Bite, we understand that hosting an event involves more than just 
                great food. Our team of professionals is dedicated to providing exceptional 
                service from start to finish. We will work closely with you to customize your 
                menu, accommodate dietary preferences, and ensure that every detail is 
                taken care of, leaving you free to enjoy your event and create lasting memories.
              </p>
              
              <p>
                Whether you are hosting a wedding, corporate gathering, birthday celebration, 
                or any special occasion, let Stick'n'Bite elevate your event with the flavors 
                of Brazil. Our commitment to quality, authenticity, and exceptional service 
                sets us apart as the go-to catering partner for an unforgettable Brazilian 
                barbecue experience.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={teamChefsImg}
                alt="Our team of professional chefs"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {/* Mission */}
          <div className="rounded-xl bg-primary p-8 lg:p-10">
            <h3 className="mb-4 font-display text-2xl font-semibold text-gold-light">
              MISSION
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To deliver an unforgettable dining experience through authentic Brazilian 
              barbecue and exceptional service. We are dedicated to crafting delicious, 
              high-quality meals that bring people together and create lasting memories 
              at every event
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-xl bg-primary p-8 lg:p-10">
            <h3 className="mb-4 font-display text-2xl font-semibold text-gold-light">
              VISION
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be the leading choice for Brazilian barbecue catering in San Diego, 
              Los Angeles and surrounding areas, renowned for our unparalleled quality, 
              innovative menu offerings, and outstanding customer service
            </p>
          </div>

          {/* Values */}
          <div className="rounded-xl bg-primary p-8 lg:p-10">
            <h3 className="mb-4 font-display text-2xl font-semibold text-gold-light">
              VALUES
            </h3>
            <ul className="space-y-2 text-primary-foreground/80">
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Get A Quote Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={scrollToQuote}
            size="lg"
            className="bg-gold text-white hover:bg-gold/90 px-10 py-6 text-base font-semibold tracking-wider uppercase"
          >
            Get A Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreAboutUs;
