import { motion } from "framer-motion";
import {
  Package,
  Globe2,
  Scale,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillars = [
  {
    icon: <Package size={38} />,
    title: "Global Export",
    description:
      "Exporting premium Indian products that meet international quality standards.",
    path: "/export",
  },
  {
    icon: <Globe2 size={38} />,
    title: "Global Import",
    description:
      "Sourcing high-quality industrial and safety products from trusted global partners.",
    path: "/import",
  },
  {
    icon: <Scale size={38} />,
    title: "Legal Services",
    description:
      "Domestic and international legal consultancy for businesses worldwide.",
    path: "/services",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Cyber Security",
    description:
      "Advanced cyber security solutions for secure and reliable business operations.",
    path: "/services",
  },
];

export default function BusinessPillars() {
  const navigate = useNavigate();

  return (
    <section className="pt-28 pb-40 bg-[#F5F7FA]">

    <div className="w-full mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
           className="w-full flex flex-col items-center text-center"
        >
          <p className="uppercase tracking-[7px] text-[#FF7A00] font-semibold text-sm">
            OUR BUSINESS
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] leading-tight">
            Four Strong Business Pillars
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            RR Global Nexusx delivers comprehensive international business
            solutions through exports, imports, legal consultancy and cyber
            security services designed to help businesses grow confidently.
          </p>
        </motion.div>

        {/* Cards */}

       <div className="w-full flex justify-center mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1100px] mx-auto mb-32">

    {pillars.map((pillar, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-gray-200
                shadow-lg
                hover:shadow-2xl
                hover:border-[#2E86DE]/30
                px-10
                py-10
                flex
                flex-col
                items-center
                text-center
                h-full
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-[#EAF4FF]
                  flex
                  items-center
                  justify-center
                  text-[#2E86DE]
                  group-hover:bg-[#2E86DE]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {pillar.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-3xl font-bold text-[#0B2545]">
                {pillar.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-gray-600 text-base leading-8 flex-grow">
                {pillar.description}
              </p>

              {/* Button */}

              <button
                onClick={() => navigate(pillar.path)}
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#2E86DE]
                  hover:text-[#FF7A00]
                  transition-all
                  duration-300
                "
              >
                Explore Service

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </motion.div>

          ))}

          </div>
        </div>
        {/* SPACE BETWEEN CARDS AND FOOTER */}
        <div className="h-15 w-full"></div>
      </div>
    </section>
  );
}