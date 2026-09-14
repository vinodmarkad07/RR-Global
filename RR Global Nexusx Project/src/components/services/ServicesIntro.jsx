import { motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Scale size={30} />,
    title: "Legal Expertise",
    description:
      "Comprehensive domestic and international legal consultancy for businesses.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Cyber Protection",
    description:
      "Advanced cyber security services to protect your digital infrastructure.",
  },
  {
    icon: <Globe2 size={30} />,
    title: "Global Support",
    description:
      "Professional guidance for businesses operating across international markets.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Trusted Solutions",
    description:
      "Reliable services focused on compliance, security and long-term business success.",
  },
];

export default function ServicesIntro() {
  return (
    <section className="py-28 bg-white"
  style={{
    paddingLeft: "80px",
    paddingRight: "80px",
    boxSizing: "border-box",
    width: "100%",
  }}
>

  <div
    style={{
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
      boxSizing: "border-box",
    }}
  >

        <div className="grid lg:grid-cols-2 gap-20 items-center min-w-0">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold text-sm">
              What We Offer
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#071426] leading-tight">
              Professional Services
              <br />
              Built Around
              <span className="text-[#D4AF37]"> Your Business.</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              RR Global Nexusx delivers trusted legal consultancy and
              cyber security services that help businesses operate
              confidently in today's competitive environment.
              We focus on legal compliance, digital protection,
              strategic guidance and long-term business growth.
            </p>

          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6 min-w-0"
          >

            {features.map((item, index) => (

              <div
                key={index}
                className="
                bg-[#F8FAFC]
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-6">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold text-[#071426] text-center">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7 text-center">

                  {item.description}

                </p>

              </div>

            ))}

          </motion.div>

        </div>
 <div className="h-10 w-full"></div>
      </div>

    </section>
  );
}