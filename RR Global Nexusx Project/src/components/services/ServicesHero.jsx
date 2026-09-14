import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import servicesBanner from "../../assets/images/services/services-banner.jpg";

export default function ServicesHero() {
  return (
    <section className="relative h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">

      {/* Background Image */}

      <img
        src={servicesBanner}
        alt="Services Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#071426]/75"></div>

      {/* Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[8px] text-[#D4AF37] font-semibold text-sm"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Professional Business
          <br />
          Solutions For
          <br />
          Global Success
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-200"
        >
          Delivering trusted Domestic & Global Legal Services together with
          advanced Cyber Security Solutions to help businesses grow securely
          and confidently in today's competitive world.
        </motion.p>

                {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center items-center gap-3 text-lg"
        >
          <Link
            to="/"
            className="text-white hover:text-[#D4AF37] transition duration-300"
          >
            Home
          </Link>

          <span className="text-[#D4AF37]">/</span>

          <span className="font-semibold text-[#D4AF37]">
            Services
          </span>

        </motion.div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

    </section>
  );
}