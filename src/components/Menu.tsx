import { motion } from "framer-motion";

const menuItems = {
  appetizers: [
    {
      name: "Coalho Cheese",
      description: "A traditional Brazilian grilled cheese delicately paired with artisanal honey.",
    },
    {
      name: "Caprese Skewer",
      description: "A refined bite of fresh mozzarella, heirloom cherry tomatoes, and basil finished with a balsamic reduction.",
    },
    {
      name: "Brazilian Croquettes",
      description: "Golden, crisp pastries filled with savory seasoned meats and cheese, a beloved Brazilian specialty.",
    },
    {
      name: "Cheese Bread (Pão De Queijo)",
      description: "Elegant, gluten free bite-sized baked cheese rolls, light and airy with a rich flavor.",
    },
    {
      name: "Charcuterie Board",
      description: "An artful selection of cured meats, fine cheeses, and seasonal accompaniments.",
    },
    {
      name: "Crudité Board",
      description: "A sophisticated display of market-fresh vegetables served with delicious dips.",
    },
  ],
  salads: [
    {
      name: "Potato Salad",
      description: "Creamy potatoes enhanced with delicate herbs and a touch of freshness.",
    },
    {
      name: "Macaroni Salad",
      description: "A classic pasta salad presented with a light and creamy finish.",
    },
    {
      name: "Vinagrete Salad",
      description: "A vibrant Brazilian blend of tomatoes and onions, in citrus refreshing dressing.",
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine, parmesan shavings, and artisan croutons in a traditional Caesar dressing.",
    },
    {
      name: "Coleslaw Salad",
      description: "A refreshing mix of shredded cabbage and carrots in a tangy cream dressing.",
    },
  ],
  grilledProteins: [
    {
      name: "Kafta",
      description: "Juicy ground beef blended with herbs and spices, roasted over open flame.",
    },
    {
      name: "Brazilian Pork Sausage",
      description: "Authentic, smoky sausages prepared over open fire.",
    },
    {
      name: "Marinated Chicken",
      description: "Tender cuts of chicken infused with herbs and roasted to perfection.",
    },
    {
      name: "Chicken Hearts",
      description: "A Brazilian delicacy, lightly seasoned and fire-grilled for a refined experience.",
    },
    {
      name: "Bacon-Wrapped Chicken",
      description: "Succulent chicken enveloped in crisp, smoky bacon.",
    },
    {
      name: "Garlic Shrimp",
      description: "Delicate shrimp sautéed with garlic and fresh herbs.",
    },
    {
      name: "Mahi Mahi",
      description: "A light, flaky white fish fire-roasted with subtle seasoning.",
    },
    {
      name: "Bacon-Wrapped Steak",
      description: "Premium cuts of beef paired with smoky bacon, roasted over flame.",
    },
    {
      name: "Picanha (Prime Sirloin Cap)",
      description: "Our signature cut of sirloin, fire-roasted to perfection and prized for its tenderness and flavor.",
    },
  ],
  sides: [
    {
      name: "White Rice",
      description: "A timeless Brazilian staple, light and fluffy.",
    },
    {
      name: "Mashed Potatoes",
      description: "Velvety potatoes whipped with butter for a smooth finish.",
    },
    {
      name: "Garlic Bread",
      description: "Made with our signature housemade garlic and cheese paste, baked and then grilled until golden.",
    },
    {
      name: "Brazilian Black Beans",
      description: "Slow-simmered beans, rich and hearty with traditional flavor.",
    },
    {
      name: "Roasted Seasonal Vegetables",
      description: "A colorful medley of fire-roasted vegetables.",
    },
    {
      name: "Farofa",
      description: "Toasted cassava flour blended with savory seasonings, a signature Brazilian accompaniment.",
    },
  ],
  desserts: [
    {
      name: "Brigadeiros (Brazilian Truffles)",
      description: "Brazil's signature bite-sized truffles, handcrafted in a variety of flavors — from classic chocolate to indulgent gourmet creations.",
    },
    {
      name: "Pudim (Brazilian Flan)",
      description: "Silky caramel custard with a velvety texture, the perfect balance of sweetness and elegance.",
    },
    {
      name: "Fruit Board",
      description: "A vibrant seasonal display of fresh, hand-selected fruits, beautifully arranged.",
    },
    {
      name: "Passion Fruit Mousse",
      description: "Light and airy mousse infused with tropical passion fruit, offering a refreshing finish.",
    },
  ],
};

// Elegant decorative separator
const MenuDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex items-center justify-center my-16 max-w-5xl mx-auto"
  >
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
    <div className="mx-6 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
      <div className="w-2 h-2 rounded-full bg-primary/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
  </motion.div>
);

const MenuItem = ({ name, description, delay }: { name: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <h4 className="font-display text-lg md:text-xl text-foreground mb-2">{name}</h4>
    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
  </motion.div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
            Check Out Our Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the essence of Brazilian barbecue with Stick{"'"}n{"'"}Bite{"'"}s menu.
            <br />
            Customize your culinary journey for an unforgettable event experience.
          </p>
        </motion.div>

        {/* Menu Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-center text-foreground mb-12"
        >
          Menu
        </motion.h3>

        {/* Menu Grid - Appetizers & Salads */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Appetizers */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              Appetizers
            </motion.h3>
            {menuItems.appetizers.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Salads */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              Salads
            </motion.h3>
            {menuItems.salads.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <MenuDivider />

        {/* Menu Grid - Grilled Proteins & Sides */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Grilled Proteins */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              Grilled Proteins
            </motion.h3>
            {menuItems.grilledProteins.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                delay={index * 0.05}
              />
            ))}
          </div>

          {/* Sides */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              Sides
            </motion.h3>
            {menuItems.sides.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <MenuDivider />

        {/* Desserts - Full Width */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-foreground mb-8"
          >
            Desserts
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-x-16">
            {menuItems.desserts.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.name}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
