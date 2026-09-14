import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import banner from "../../assets/images/contact/contact-banner.jpg";

export default function ContactHero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">

      {/* Background Image */}

      <img
        src={banner}
        alt="Contact RR Global Nexusx"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#071426]/75"></div>

      {/* Content */}

      <div
  className="relative z-10 h-full flex items-center"
  style={{
    width: "calc(100% - 140px)",
    maxWidth: "1720px",
    margin: "0 auto",
  }}
>

        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-3xl w-full"
>
          <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
            Contact Us
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-white">
            Let's Start a
            <span className="text-[#D4AF37]"> Conversation</span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Whether you're looking for export solutions, import partnerships,
            legal consultancy or cyber security services, our team is here
            to help your business grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-5"
          className="flex flex-wrap gap-6"
  style={{ marginTop: "20px" }}>
            

                        <Link
              to="/services"
              className="
  flex
  items-center
  justify-center
  gap-3
  w-[263px]
  h-[38px]
  bg-gradient-to-r from-[#D4AF37] to-[#E8C55B]
  text-[#071426]
  rounded-xl
  font-semibold
  hover:scale-105
  transition
">
              Explore Services
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/about"
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
              Learn More
            </Link>

          </div>

          {/* Breadcrumb */}

          <div className="flex flex-wrap gap-6"
  style={{ marginTop: "20px" }}
          >

            <Link
              to="/"
              className="text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#D4AF37]">
              Contact
            </span>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          text-white
          animate-bounce
        "
      >

        <div className="w-[2px] h-10 bg-[#D4AF37] rounded-full"></div>

        <span className="mt-2 text-xs tracking-[4px] uppercase">
          Scroll
        </span>

      </div>

    </section>
  );
}