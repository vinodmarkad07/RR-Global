import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ServicesCTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="min-h-screen w-full bg-gradient-to-br from-[#071426] via-[#0B2545] to-[#1E3A8A] flex items-center justify-center overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Additional Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,...')]"></div>
      </div>

      <div className="w-full h-full flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#0F1B2E]
            to-[#1a2847]
            px-8
            md:px-20
            py-28
            shadow-2xl
            max-w-5xl
            w-full
            border
            border-white/10
            backdrop-blur-sm
          "
        >

          {/* Background Circles */}

          <motion.div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FF7A00] opacity-20 blur-3xl"
            animate={{
              x: (mousePosition.x - 300) * 0.1,
              y: (mousePosition.y - 300) * 0.1,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          ></motion.div>

          <motion.div 
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] opacity-15 blur-3xl"
            animate={{
              x: (mousePosition.x - 300) * -0.08,
              y: (mousePosition.y - 300) * -0.08,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          ></motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">

            <p className="uppercase tracking-[6px] text-[#FF7A00] font-semibold text-sm">
              Ready To Get Started?
            </p>

            <motion.h2 
              className="mt-8 text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Let's Protect &
              <br />
              Grow Your Business
            </motion.h2>

            <motion.p 
  className="w-full max-w-3xl mx-auto mt-8 px-4 text-center text-lg leading-8 text-gray-200"
  whileHover={{ opacity: 0.9 }}
  transition={{ duration: 0.3 }}
>
  Whether you require trusted legal consultancy or
  advanced cyber security solutions, RR Global Nexusx
  is ready to help your business move forward with
  confidence and complete peace of mind.
</motion.p>
                        <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="mt-12"
            >

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
               className="flex flex-wrap gap-6"
  style={{ marginTop: "20px" }}
>
                <Link
                  to="/contact"
                  className="
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
                Contact Our Team

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                </Link>
              </motion.div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}