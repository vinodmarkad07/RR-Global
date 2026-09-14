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
    icon: <Package size={42} />,
    title: "Global Export",
    description:
      "Exporting premium Indian agricultural and industrial products with international quality standards.",
    path: "/export",
  },
  {
    icon: <Globe2 size={42} />,
    title: "Global Import",
    description:
      "Importing high-quality industrial safety equipment and protective products from trusted suppliers.",
    path: "/import",
  },
  {
    icon: <Scale size={42} />,
    title: "Legal Services",
    description:
      "Domestic and international legal consultancy for businesses operating across borders.",
    path: "/services",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Cyber Security",
    description:
      "Comprehensive cyber security solutions including penetration testing, network security and security architecture.",
    path: "/services",
  },
];


export default function BusinessPillars() {

  const navigate = useNavigate();


  return (

<section className="py-36 bg-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">


       {/* Heading */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full flex justify-center"
>
  <div className="max-w-5xl flex flex-col items-center text-center">
    <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold text-sm text-center">
      Our Business
    </p>

    <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight text-center">
      Four Strong Business Pillars
    </h2>

    <p className="mt-8 max-w-2xl mx-auto text-lg leading-9 text-gray-600 text-center">
      RR Global Nexusx provides complete international business
      solutions through exports, imports, legal consultancy, and
      cyber security services.
    </p>
  </div>
</motion.div>


        {/* Cards */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8 xl:gap-10
          mt-28
        ">


          {pillars.map((pillar,index)=>(


            <motion.div

              key={index}

              whileHover={{
                y:-12
              }}

              transition={{
                duration:0.3
              }}

              className="
                group
                bg-white
                rounded-3xl
                border
                border-gray-200
                shadow-lg
                hover:shadow-2xl
                hover:border-[#D4AF37]/40
                p-10
                flex
                flex-col
                transition-all
              "

            >


              {/* Icon */}

              <motion.div

                whileHover={{
                  scale:1.08
                }}

                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-[#D4AF37]/15
                  flex
                  items-center
                  justify-center
                  text-[#111827]
                  mb-8
                  group-hover:bg-[#D4AF37]
                  group-hover:text-white
                  transition
                "

              >

                {pillar.icon}

              </motion.div>



              <h3 className="
                text-2xl
                font-bold
                text-[#111827]
                mb-6
              ">
                {pillar.title}
              </h3>



              <p className="
                text-gray-600
                leading-8
                flex-grow
              ">
                {pillar.description}
              </p>



              <button

                onClick={() => navigate(pillar.path)}

                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#111827]
                  group-hover:text-[#D4AF37]
                  transition
                "

              >

                Learn More

                <ArrowRight size={18}/>

              </button>


            </motion.div>


          ))}


        </div>


      </div>

    </section>

  );
}