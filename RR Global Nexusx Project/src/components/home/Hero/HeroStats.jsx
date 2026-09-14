import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const highlights = [
  {
    icon: <Globe2 size={24} />,
    title: "Global Network",  },
  {
    icon: <Handshake size={24} />,
    title: "Trusted Partnerships",
    
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure Solutions",  },
];

export default function HeroStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">

      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -6,
          }}
          className="
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-lg
            p-6
            transition-all
            duration-300
            hover:border-[#FF7A00]
            hover:bg-white/12
            flex
            flex-col
            items-center
            text-center
          "
        >
          <div className="w-full flex justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 flex items-center justify-center text-[#FF7A00]">
              {item.icon}
            </div>
          </div>

          <h3 className="mt-5 text-xl font-bold text-white w-full text-center">
            {item.title}
          </h3>
        </motion.div>
      ))}

    </div>
  );
}