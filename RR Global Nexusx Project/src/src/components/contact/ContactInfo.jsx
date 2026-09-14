import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={32} />,
    title: "Office Address",
    description:
      "Shop No. 6, Beldare Prestige, Ambegaon Bk, Pune, Maharashtra, India - 411046",
  },

  {
    icon: <Phone size={32} />,
    title: "Call Us",
    description:
      "+91 8623803992",
  },

  {
    icon: <Mail size={32} />,
    title: "Email Address",
    description:
      "rrglobalnexus@gmail.com",
  },

  {
    icon: <Clock size={32} />,
    title: "Business Hours",
    description:
      "Mon - Sat\n9:00 AM - 6:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold text-sm">
            Contact Information
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#071426]">
            We're Here To
            <span className="text-[#D4AF37]">
              {" "}Help You
            </span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            Reach out to our team for export, import,
            legal consultancy or cyber security services.
            We'd be delighted to discuss your business requirements.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                      {contactInfo.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                border
                border-gray-100
                hover:border-[#D4AF37]/40
                transition-all
                duration-300
                text-center
              "
            >

              {/* Icon */}

              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-2xl
                  bg-[#D4AF37]/10
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  group-hover:bg-[#D4AF37]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#071426]">

                {item.title}

              </h3>

              <p
                className="
                  mt-5
                  text-gray-600
                  leading-8
                  whitespace-pre-line
                "
              >

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}