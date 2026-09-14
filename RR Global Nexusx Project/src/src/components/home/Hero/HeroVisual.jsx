import { motion } from "framer-motion";
import {
  Globe2,
  Plane,
  Ship,
  ShieldCheck,
  Scale,
  Package,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative flex justify-center items-center h-[650px]">

      <div className="relative flex items-center justify-center">

        <Globe2
          size={110}
          className="text-[#D4AF37]"
        />

      </div>

    </div>
  );
}