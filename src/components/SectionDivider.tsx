import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "light" | "dark";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
  const bgClass = variant === "dark" 
    ? "from-transparent via-white/20 to-white/30" 
    : variant === "light"
    ? "from-transparent via-primary/20 to-primary/40"
    : "from-transparent via-primary/30 to-primary/50";

  const dotClass = variant === "dark"
    ? "bg-white/30"
    : "bg-primary/40";

  const dotCenterClass = variant === "dark"
    ? "bg-white/50"
    : "bg-primary/60";

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex items-center justify-center py-8 max-w-4xl mx-auto px-4"
    >
      <div className={`flex-1 h-px bg-gradient-to-r ${bgClass}`} />
      <div className="mx-6 flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
        <div className={`w-2 h-2 rounded-full ${dotCenterClass}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      </div>
      <div className={`flex-1 h-px bg-gradient-to-l ${bgClass}`} />
    </motion.div>
  );
};

export default SectionDivider;
