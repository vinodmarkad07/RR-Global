import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Server,
  Lock,
  CheckCircle,
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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >

          <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold text-sm">
            Cyber Security
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#071426]">
            Secure Your Business
            <span className="text-[#D4AF37]"> Digitally</span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            Protect your business against modern cyber threats through
            advanced security strategies, infrastructure protection and
            proactive vulnerability assessments.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="grid md:grid-cols-2 gap-6">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="
                  bg-[#F8FAFC]
                  rounded-3xl
                  p-7
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-5">

                    {service.icon}

                  </div>

                  <h3 className="text-xl font-bold text-[#071426]">

                    {service.title}

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {service.description}

                  </p>

                </div>

              ))}

            </div>

            <button
              className="
              mt-10
              bg-[#D4AF37]
              text-[#071426]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              duration-300
              shadow-lg
              hover:shadow-yellow-500/30
              "
            >
              Talk To Our Experts
            </button>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
              src={cyberImage}
              alt="Cyber Security"
              className="
                w-full
                max-w-[460px]
                h-[380px]
                object-cover
                rounded-[30px]
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

    </section>
  );
}
