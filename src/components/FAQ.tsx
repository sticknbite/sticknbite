import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of events do you cater to?",
    answer: "We cater to a wide range of events, including weddings, corporate functions, social gatherings, birthday parties, holiday celebrations, and more. No event is too big or too small for us!",
  },
  {
    question: "Can you accommodate dietary restrictions and special requests?",
    answer: "Absolutely! We understand that dietary restrictions and special requests are common among guests. Our team is experienced in catering to various dietary needs, including vegetarian, gluten-free, and allergies. Just let us know your requirements, and we will work with you to create a customized menu that meets your specific needs.",
  },
  {
    question: "How far in advance should I book your catering services?",
    answer: "We recommend booking our catering services as soon as you have a confirmed date for your event. This allows us to secure our availability and start the planning process. However, we understand that some events may be last-minute, and we will do our best to accommodate your request based on our availability.",
  },
  {
    question: "Can you provide both food and beverage services?",
    answer: "Yes, we offer a comprehensive range of services, including food and beverage options. We can provide bartending services to serve alcoholic and non-alcoholic beverages, or we can work with you to create a custom beverage package that suits your preferences and budget.",
  },
  {
    question: "Can you assist with event planning and rentals?",
    answer: "Absolutely! We have a dedicated team of event professionals who can assist you with event planning and rentals. From suggesting suitable venues to arranging tables, chairs, linens, and other necessary equipment, we are here to ensure that your event runs smoothly from start to finish.",
  },
  {
    question: "Do you provide on-site staff for setup, service, and cleanup?",
    answer: "Yes, we provide a professional and experienced staff who will take care of all the setup, service, and cleanup aspects of your event. Our team will ensure that your venue is beautifully set up, food is presented impeccably, and all the details are taken care of, allowing you to enjoy your event without any worries.",
  },
  {
    question: "Can you accommodate last-minute changes or additions to the menu?",
    answer: "While we prefer to have the final menu details confirmed in advance, we understand that changes may arise. We will do our best to accommodate any last-minute changes or additions to the menu, depending on the availability of ingredients and our kitchen capacity.",
  },
  {
    question: "How long do you stay at the event?",
    answer: "Our team will arrive at the venue 1 hour before to do the set up and will stay for 3 hours grilling the skewers on the spot and restocking the buffet station as needed. Additional hours can be requested for a fee.",
  },
  {
    question: "How do I get a quote for my event?",
    answer: "Getting a quote is easy! Simply reach out to us through our website, phone, or email, and provide us with details about your event, including the date, location, estimated guest count, and any specific requirements or preferences. Our team will promptly get back to you with a customized quote tailored to your event.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that unforeseen issues happen so we try to be flexible. We charge a non-refundable 20% deposit to guarantee the date. In case of cancellation 72h or before you can reschedule your event and use the same deposit. If cancellation occurs less than 72h prior to the event we use the deposit as a cancellation fee. We encourage you to reach out to us as soon as possible if you need to cancel or make changes to your event. Our team will work with you to find the best solution based on your situation.",
  },
];

const FAQ = () => {
  const leftColumn = faqItems.filter((_, index) => index % 2 === 0);
  const rightColumn = faqItems.filter((_, index) => index % 2 === 1);

  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-2">
            FAQ
          </h2>
          <p className="text-muted-foreground">Frequently Asked Questions</p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion type="multiple" className="space-y-4">
              {leftColumn.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="border-b border-primary/20 pb-4"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="multiple" className="space-y-4">
              {rightColumn.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="border-b border-primary/20 pb-4"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
