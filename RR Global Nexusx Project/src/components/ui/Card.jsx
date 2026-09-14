import { motion } from "framer-motion";

export default function Card({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="bg-white rounded-3xl shadow-lg p-8 border hover:border-[#D4AF37] transition-all"
    >
      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-[#0B1F3A]">
        {title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {description}
      </p>
    </motion.div>
  );
}