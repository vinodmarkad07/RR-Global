import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative flex justify-center items-center h-[650px]">

      {/* Blue Glow */}

      <div className="absolute w-[520px] h-[520px] rounded-full bg-[#3B82F6]/20 blur-[170px]" />

      {/* World Map */}

      <motion.img
        src="/world-map.png"
        alt="World Map"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-[560px] select-none pointer-events-none"
      />

      {/* Route 1 */}

      <svg
        className="absolute w-[560px] h-[350px]"
        viewBox="0 0 560 350"
      >
        <motion.path
          d="M150 230 Q250 120 420 140"
          stroke="#FF7A00"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [16, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </svg>

      {/* Route 2 */}

      <svg
        className="absolute w-[560px] h-[350px]"
        viewBox="0 0 560 350"
      >
        <motion.path
          d="M170 160 Q300 250 430 250"
          stroke="#60A5FA"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [0, 16],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
      </svg>

      {/* Connection Points */}

      <div className="absolute left-[160px] top-[340px] w-3 h-3 rounded-full bg-[#FF7A00] animate-pulse"></div>

      <div className="absolute right-[120px] top-[250px] w-3 h-3 rounded-full bg-[#60A5FA] animate-pulse"></div>

      <div className="absolute right-[110px] bottom-[170px] w-3 h-3 rounded-full bg-white animate-pulse"></div>

      {/* Floating Pills */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-20 left-8"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 text-white shadow-xl">
          🌍 Global Reach
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-36 right-6"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 text-white shadow-xl">
          🤝 Trusted Partner
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
        className="absolute bottom-24 right-12"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 text-white shadow-xl">
          🔒 Secure Solutions
        </div>
      </motion.div>

    </div>
  );
}