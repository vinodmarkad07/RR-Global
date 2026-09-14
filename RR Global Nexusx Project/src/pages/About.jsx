import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#081C36] via-[#0B2545] to-[#1E3A8A] overflow-hidden">


      {/* Background Glow */}

      <div className="
        absolute
        top-20
        right-20
        w-72
        h-72
        bg-[#2E86DE]/15
        rounded-full
        blur-3xl
      " />

      <div className="
        absolute
        bottom-10
        left-10
        w-96
        h-96
        bg-[#FF7A00]/10
        rounded-full
        blur-3xl
      " />



      <div
  className="w-full relative z-10"
  style={{
    paddingLeft: "70px",
    paddingRight: "70px",
  }}
>

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
            text-[#FF7A00]
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
            <span className="text-[#2E86DE]">
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

          <div
  className="flex flex-wrap gap-6"
  style={{ marginTop: "20px" }}
>


            <button className="
  flex
  items-center
  justify-center
  gap-3
  w-[263px]
  h-[38px]
  bg-[#FF7A00]
  text-white
  rounded-xl
  font-semibold
  hover:scale-105
  transition
">

              Explore Services

              <ArrowRight size={20}/>

            </button>



            <button className="
  flex
  items-center
  justify-center
  w-[263px]
  h-[38px]
  rounded-xl
  border-2
  border-white
  text-white
  font-semibold
  hover:bg-white
  hover:text-[#081C36]
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