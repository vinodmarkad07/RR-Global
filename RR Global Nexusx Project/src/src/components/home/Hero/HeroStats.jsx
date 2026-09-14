import { motion } from "framer-motion";
import {
  Globe2,
  BriefcaseBusiness,
  BadgeCheck,
  Headset,
} from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={26} />,
    number: "4",
    title: "Business Divisions",
  },
  {
    icon: <BadgeCheck size={26} />,
    number: "100%",
    title: "Quality Assurance",
  },
  {
    icon: <Headset size={26} />,
    number: "24/7",
    title: "Business Support",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{ duration: 0.25 }}
          className="group bg-white/12 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:border-[#D4AF37]/70 transition-all"
        >

          <div className="w-14 h-14 mx-auto rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#003B73] transition-all duration-300">
            {item.icon}
          </div>

          <h3 className="mt-5 text-3xl font-bold text-white">
            {item.number}
          </h3>

          <p className="mt-2 text-gray-300 text-sm leading-6">
            {item.title}
          </p>

        </motion.div>
      ))}

    </div>
  );
}