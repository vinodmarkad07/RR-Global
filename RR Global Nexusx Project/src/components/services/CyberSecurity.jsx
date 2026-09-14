import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Server,
  Lock,
} from "lucide-react";

import cyberImage from "../../assets/images/services/cyber-security.jpg";

const services = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Penetration Testing",
    description:
      "Identify security vulnerabilities before attackers can exploit them through comprehensive penetration testing.",
  },
  {
    icon: <Network size={28} />,
    title: "Network Security",
    description:
      "Protect business networks using modern security controls, firewalls and continuous monitoring.",
  },
  {
    icon: <Server size={28} />,
    title: "Network Architecture",
    description:
      "Design secure, scalable and high-performance network infrastructures for organizations.",
  },
  {
    icon: <Lock size={28} />,
    title: "Security Architecture",
    description:
      "Develop complete security frameworks that safeguard applications, systems and business data.",
  },
];

export default function CyberSecurity() {
  return (
    <section className="py-32 bg-white overflow-x-hidden">

      {/* =========================================
          OUTER CONTAINER
          Same centered layout as Legal Services
      ========================================= */}
      <div
  className="
    w-full
    max-w-[1400px]
    mx-auto
    px-6
    lg:px-12
  "
>

        {/* =========================================
            CENTERED HEADING
        ========================================= */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
  relative
  w-[100vw]
  !ml-[calc((99vw-110%)/-2)]
  flex
  flex-col
  items-center
  text-center
  mb-20
"
>
          <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold text-sm">
            Cyber Security
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-[#071426]
              leading-tight
              max-w-4xl
            "
          >
            Secure Your Business{" "}
            <span className="text-[#D4AF37]">
              Digitally
            </span>
          </h2>

          <p
            className="
              mt-7
              text-lg
              leading-9
              text-gray-600
              max-w-3xl
            "
          >
            Protect your business against modern cyber threats through
            advanced security strategies, infrastructure protection and
            proactive vulnerability assessments.
          </p>

        </motion.div>


        {/* =========================================
    MAIN CONTENT - PERFECTLY CENTERED
========================================= */}

<div className="w-full flex justify-center">

  <div
    className="
      w-full
      max-w-[1000px]
      mx-auto
      grid
      lg:grid-cols-2
      gap-[70px]
      items-center
    "
  >

    {/* =====================================
        LEFT SIDE - CYBER CARDS
    ===================================== */}

    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >

      <div className="grid grid-cols-2 gap-5">

        {services.map((service, index) => (

          <div
            key={index}
            className="
              w-full
              h-[220px]
              bg-[#F8FAFC]
              rounded-3xl
              p-6
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            {/* ICON */}
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#D4AF37]/15
                flex
                items-center
                justify-center
                text-[#D4AF37]
                mb-4
              "
            >
              {service.icon}
            </div>

            {/* TITLE */}
            <h3
              className="
                text-xl
                font-bold
                text-[#071426]
                text-center
              "
            >
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                text-gray-600
                leading-7
                text-center
              "
            >
              {service.description}
            </p>

          </div>

        ))}

      </div>

      {/* BUTTON */}

      <button
        className="
  flex
  items-center
  justify-center
  gap-3
  w-[150px]
  h-[30px]
  bg-gradient-to-r from-[#D4AF37] to-[#E8C55B]
  text-[#071426]
  rounded-xl
  font-semibold
  hover:scale-105
  transition
"style={{ marginTop: "10px" }}
>
        📞 Experts
      </button>

    </motion.div>


    {/* =====================================
        RIGHT SIDE - IMAGE
    ===================================== */}

    <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        w-full
        flex
        justify-center
      "
    >

      <img
        src={cyberImage}
        alt="Cyber Security"
        className="
            w-full
            max-w-[520px]
            h-[500px]
            object-cover
            rounded-3xl
            shadow-2xl
            mx-auto
            hover:scale-105
            transition-all
            duration-500
            "
            />

    </motion.div>

  </div>

</div>
 <div className="h-10 w-full"></div>
      </div>

    </section>
  );
}