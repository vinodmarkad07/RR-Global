import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  const trustPoints = [
    "Premium Export Products",
    "Global Import Solutions",
    "Legal & Cyber Security Experts",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
     className="text-white"
    
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00] animate-pulse"></span>

        <span className="uppercase tracking-[3px] text-sm font-semibold text-[#2E86DE]">
          Global Import • Export • Legal • Cyber Security
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-10 text-4xl md:text-5xl xl:text-6xl font-black leading-[1.1] text-white">
        Empowering
        <br />

        <span className="text-[#2E86DE]">
          Global Trade
        </span>

        <br />

        Through Trust &
        <br />

        Excellence
      </h1>

      {/* Description */}
    

      {/* Buttons */}
      <div
  className="flex flex-wrap gap-6"
  style={{ marginTop: "20px" }}
>

        <Link to="/export">
          <Button className="
  flex
  items-center
  justify-center
  gap-3
  w-[263px]
  h-[38px]
  bg-[#FF7A00]
  text-white
  rounded-xl
  font-semibold
  hover:scale-105
  transition
">
            Explore Products

            <ArrowRight size={20} />
          </Button>
        </Link>

        <Link to="/contact">
          <Button
            variant="secondary"
           className="
  flex
  items-center
  justify-center
  w-[263px]
  h-[38px]
  rounded-xl
  border-2
  border-white
  text-white
  font-semibold
  hover:bg-white
  hover:text-[#081C36]
  transition
">
            Contact Us
          </Button>
        </Link>

      </div>

      {/* Trust Strip */}
      <div
  className="space-y-10"
  style={{ marginTop: "20px" }}
>

        {trustPoints.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              size={22}
              className="text-[#FF7A00] flex-shrink-0"
            />

            <span className="text-gray-200 text-lg">
              {item}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-16" style={{ marginTop: "20px" }}>
        <HeroStats />
      </div>

    </motion.div>
  );
}
