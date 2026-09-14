import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#FF7A00] text-white hover:bg-[#ff8c1a] shadow-lg hover:shadow-orange-500/30",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#0B2545]",

    dark:
      "bg-[#0B2545] text-white hover:bg-[#123a6b]",

    outline:
      "border-2 border-[#2E86DE] text-[#2E86DE] hover:bg-[#2E86DE] hover:text-white",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`
        px-8
        py-4
        rounded-xl
        font-semibold
        text-lg
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}