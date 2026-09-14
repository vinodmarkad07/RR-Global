import { motion } from "framer-motion";
import {
  Award,
  Globe2,
  ShieldCheck,
  Users,
  Briefcase,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: <Award size={32} />,
    title: "Professional Expertise",
    description:
      "Experienced professionals delivering reliable legal and cyber security solutions.",
  },
  {
    icon: <Globe2 size={32} />,
    title: "Global Business Support",
    description:
      "Helping businesses expand confidently into domestic and international markets.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Reliable Security",
    description:
      "Advanced security practices that protect your business and digital infrastructure.",
  },
  {
    icon: <Users size={32} />,
    title: "Client-Centric Approach",
    description:
      "Every solution is tailored according to your business goals and requirements.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Complete Business Solutions",
    description:
      "Legal consultancy and cyber security services under one trusted organization.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Dedicated Support",
    description:
      "Our team remains available throughout every stage of your business journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#F8FAFC]">

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
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#071426]">
            Why Businesses Trust
            <span className="text-[#D4AF37]">
              {" "}RR Global Nexusx
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            We combine legal expertise, cyber security excellence and
            customer-focused solutions to help businesses grow securely,
            remain compliant and succeed in competitive global markets.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {reasons.map((reason, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                border
                border-transparent
                hover:border-[#D4AF37]/30
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#D4AF37]/15
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  mb-7
                "
              >

                {reason.icon}

              </div>

              <h3 className="text-2xl font-bold text-[#071426]">

                {reason.title}

              </h3>

              <p className="mt-5 text-gray-600 leading-8">

                {reason.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}      