import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-[#071426]
            px-8
            md:px-16
            py-20
            shadow-2xl
          "
        >

          {/* Background Circles */}

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/10"></div>

          <div className="absolute -bottom-28 -left-28 w-96 h-96 rounded-full bg-[#D4AF37]/5"></div>

          <div className="relative z-10 text-center">

            <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
              Ready To Get Started?
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">
              Let's Protect &
              <br />
              Grow Your Business
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-300">
              Whether you require trusted legal consultancy or
              advanced cyber security solutions, RR Global Nexusx
              is ready to help your business move forward with
              confidence and complete peace of mind.
            </p>
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

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#D4AF37]
                  text-[#071426]
                  px-10
                  py-5
                  rounded-2xl
                  font-bold
                  text-lg
                  shadow-xl
                  hover:shadow-yellow-500/40
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Contact Our Team

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}