import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#334155] overflow-hidden">


      {/* Background Glow */}

      <div className="
        absolute
        top-20
        right-20
        w-72
        h-72
        bg-[#D4AF37]/20
        rounded-full
        blur-3xl
      " />



      <div className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        relative
        z-10
      ">


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          className="
            max-w-4xl
          "

        >


          {/* Small Heading */}

          <p className="
            text-[#D4AF37]
            uppercase
            tracking-[5px]
            font-semibold
            mb-6
          ">
            About RR Global Nexusx
          </p>



          {/* Main Heading */}

          <h1 className="
            text-5xl
            lg:text-7xl
            font-bold
            text-white
            leading-tight
          ">

            Connecting
            <span className="text-[#D4AF37]">
              {" "}Businesses
            </span>
            <br />

            Beyond Borders

          </h1>




          {/* Description */}

          <p className="
            mt-8
            text-lg
            lg:text-xl
            text-gray-300
            leading-9
            max-w-3xl
          ">

            RR Global Nexusx delivers global trade solutions
            through exports, imports, legal consultancy and
            cyber security services, helping businesses grow
            confidently across international markets.

          </p>




          {/* Buttons */}

          <div className="
            flex
            flex-wrap
            gap-5
            mt-10
          ">


            <button className="
              flex
              items-center
              gap-3
              bg-[#D4AF37]
              text-[#111827]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            ">

              Explore Services

              <ArrowRight size={20}/>

            </button>



            <button className="
              px-8
              py-4
              rounded-xl
              border
              border-white/30
              text-white
              font-semibold
              hover:bg-white
              hover:text-[#111827]
              transition
            ">

              Contact Us

            </button>


          </div>


        </motion.div>


      </div>


    </section>
  );
}