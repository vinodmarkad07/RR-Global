import { motion } from "framer-motion";
import {
  Scale,
  Globe2,
  CheckCircle,
} from "lucide-react";

import legalImage from "../../assets/images/services/legal-services.jpg";

const domesticServices = [
  "Business Registration",
  "Company Formation",
  "Contract Drafting",
  "Legal Documentation",
  "GST & Tax Compliance",
  "Corporate Compliance",
];

const globalServices = [
  "Import Documentation",
  "Export Documentation",
  "International Trade Compliance",
  "Cross-border Legal Consultation",
  "Commercial Agreements",
  "Global Business Advisory",
];

export default function LegalServices() {
  return (
    <section className="py-32 bg-[#F8FAFC] overflow-x-hidden">

  <div
    className="w-full mx-auto"
    style={{
      maxWidth: "1400px",
      paddingLeft: "60px",
      paddingRight: "60px",
      boxSizing: "border-box",
    }}
  >

        {/* Heading */}

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
            Legal Services
          </p>

      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] leading-tight max-w-4xl">
            Domestic & Global
            <span className="text-[#D4AF37]"> Legal Solutions</span>
          </h3>

          <p className="mt-7 text-lg leading-9 text-gray-600 max-w-3xl">
            Our legal professionals assist businesses with domestic
            regulations as well as international trade compliance,
            ensuring smooth business operations across borders.
          </p>

        </motion.div>

        <div className="flex justify-center w-full">
   <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto"> 
  

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
             src={legalImage}
            alt="Legal Services"
            className="
            w-full
            max-w-[420px]
            h-[480px]
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

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Domestic Services */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <Scale size={28} />
                </div>

                <h3 className="text-2xl font-bold text-[#071426]">
                  Domestic Legal Services
                </h3>

              </div>

              <div className="space-y-4">

                {domesticServices.map((service, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      size={20}
                      className="text-[#D4AF37]"
                    />

                    <span className="text-gray-700">
                      {service}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Global Services */}

            <div className="bg-white rounded-3xl shadow-xl p-8 mt-8
            "style={{ marginTop: "10px" }}
>

              <div className="flex items-center gap-3 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <Globe2 size={28} />
                </div>

                <h3 className="text-2xl font-bold text-[#071426]">
                  Global Legal Services
                </h3>

              </div>

              <div className="space-y-4">

                {globalServices.map((service, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      size={20}
                      className="text-[#D4AF37]"
                    />

                    <span className="text-gray-700">
                      {service}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <button
              className="
              mt-10
              bg-[#D4AF37]
              text-[#071426]
              h-[50px]
              w-[240px]
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              duration-300
              shadow-lg
              hover:shadow-yellow-500/30

              "style={{ marginTop: "10px" }}
>
              Request Legal Consultation
            </button>

          </motion.div>

        </div>
        </div>
 <div className="h-10 w-full"></div>
      </div>

    </section>
  );
}