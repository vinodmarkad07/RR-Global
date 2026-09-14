import { useState } from "react";
import { motion } from "framer-motion";
import {

} from "lucide-react";

import officeImage from "../../assets/images/contact/contact-office.jpg";

const contactMethods = ["Email", "Phone", "WhatsApp", "Any"];

export default function ContactForm() {
  const [preferredMethod, setPreferredMethod] = useState("Email");

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-[#F8FAFC]">

      <div
  style={{
    width: "calc(100% - 80px)",
    marginLeft: "40px",
    marginRight: "40px",
    margin: "0 auto",
  }}
>

        {/* ================= HEADING ================= */}

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="
  flex
  flex-col
  items-center
  text-center
  mb-20
"
>
          <p className="text-sm uppercase tracking-[5px] text-[#D4AF37] font-semibold">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071426] leading-tight">
            We'd Love To
            <span className="block text-[#D4AF37]">
              Hear From You
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
            Fill in your details and select the service you need.
            Our export, import, legal and security specialists
            will get back to you quickly.
          </p>
          <div className="h-5 w-full"></div>
        </motion.div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">


          {/* ================= OFFICE IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="
              rounded-[36px]
              border
              border-white
              bg-white
              p-5
              sm:p-6
              shadow-[0_40px_100px_rgba(7,20,38,0.12)]
            ">

              <div className="overflow-hidden rounded-[28px]">

                <img
                  src={officeImage}
                  alt="Office environment"
                  className="
                    h-[420px]
                    sm:h-[500px]
                    lg:h-[560px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

              

              </div>

            </div>

          </motion.div>


          {/* ================= FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >

            <div className="
              rounded-[36px]
              border
              border-[#D4AF37]/20
              bg-white
              shadow-[0_30px_90px_rgba(13,47,85,0.08)]
            ">

              <div className="
                rounded-[36px]
                bg-gradient-to-br
                from-[#D4AF37]/10
                via-white
                to-white
                p-1
              ">

                <div className="
  rounded-[32px]
  bg-[#F8FAFC]
  px-10
  py-8
  sm:px-12
  sm:py-10
  lg:px-14
  lg:py-10
">


                  {/* Form Header */}

                  <div className="
  flex
  flex-col
  items-center
  justify-center
  text-center
  gap-2
">

                    <div>

                      <p className="
                        text-xs
                        sm:text-sm
                        uppercase
                        tracking-[4px]
                        text-[#D4AF37]
                        font-semibold
                      ">
                        Ready to Partner?
                      </p>

                      <h3 className="
                        mt-2
                        text-2xl
                        sm:text-3xl
                        font-bold
                        text-[#071426]
                      ">
                        Start your request today
                      </h3>

                    </div>

                    

                  </div>


                  {/* ================= FORM ================= */}

                  <form
  onSubmit={(event) => event.preventDefault()}
  className="mt-8 space-y-6"
  style={{
    paddingLeft: "40px",
    paddingRight: "40px",
  }}
>
                    {/* Name + Email */}

                    <div className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-5
                    ">

                      <div>

                        <label
                          htmlFor="full-name"
                          className="block mb-2 text-sm font-semibold text-[#071426]"
                        >
                          Full Name
                        </label>

                        <input
                          id="full-name"
                          type="text"
                          placeholder="Enter your full name"
                          className="
                            h-14
                            w-full
                            rounded-[20px]
                            border
                            border-slate-200
                            bg-white
                            !pl-6
                            !pr-6
                            text-base
                            text-slate-900
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-400
                            focus:border-[#D4AF37]
                            focus:ring-4
                            focus:ring-[#D4AF37]/20
                          "
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-semibold text-[#071426]"
                        >
                          Email Address
                        </label>

                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="
                            h-14
                            w-full
                            rounded-[20px]
                            border
                            border-slate-200
                            bg-white
                            !pl-6
                            !pr-6
                            text-base
                            text-slate-900
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-400
                            focus:border-[#D4AF37]
                            focus:ring-4
                            focus:ring-[#D4AF37]/20
                          "
                        />

                      </div>

                    </div>


                    {/* Phone + Company */}

                    <div className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-5
                    ">

                      <div>

                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-semibold text-[#071426]"
                        >
                          Phone Number
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="
                            h-14
                            w-full
                            rounded-[20px]
                            border
                            border-slate-200
                            bg-white
                            !pl-6
                            !pr-6
                            text-base
                            text-slate-900
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-400
                            focus:border-[#D4AF37]
                            focus:ring-4
                            focus:ring-[#D4AF37]/20
                          "
                        />

                      </div>


                      <div>

                        <label
                          htmlFor="company"
                          className="block mb-2 text-sm font-semibold text-[#071426]"
                        >
                          Company Name
                        </label>

                        <input
                          id="company"
                          type="text"
                          placeholder="Your company"
                          className="
                            h-14
                            w-full
                            rounded-[20px]
                            border
                            border-slate-200
                            bg-white
                            !pl-6
                            !pr-6
                            text-base
                            text-slate-900
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-400
                            focus:border-[#D4AF37]
                            focus:ring-4
                            focus:ring-[#D4AF37]/20
                          "
                        />

                      </div>

                    </div>


                    {/* Service + Preferred Contact */}

                    <div className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-5
                    ">

                      <div>

                        <label
                          htmlFor="service"
                          className="block mb-2 text-sm font-semibold text-[#071426]"
                        >
                          Service Required
                        </label>

                        <select
                          id="service"
                          className="
                            h-14
                            w-full
                            rounded-[20px]
                            border
                            border-slate-200
                            bg-white
                            !pl-6
                            !pr-6
                            text-base
                            text-slate-900
                            outline-none
                            transition
                            duration-300
                            focus:border-[#D4AF37]
                            focus:ring-4
                            focus:ring-[#D4AF37]/20
                          "
                        >

                          <option value="">
                            Select a service
                          </option>

                          <option>Export</option>
                          <option>Import</option>
                          <option>Domestic Legal Services</option>
                          <option>Global Legal Services</option>
                          <option>Penetration Testing</option>
                          <option>Network Security</option>
                          <option>Network Architecture</option>
                          <option>Security Architecture</option>

                        </select>

                      </div>


                      {/* Preferred Contact */}

                      <div>

                        <p className="mb-2 text-sm font-semibold text-[#071426]">
                          Preferred Contact
                        </p>

                        <div className="
                          grid
                          grid-cols-2
                          gap-2
                          rounded-[20px]
                          border
                          border-slate-200
                          bg-white
                          p-2
                        ">

                          {contactMethods.map((method) => (

                            <button
                              key={method}
                              type="button"
                              onClick={() => setPreferredMethod(method)}
                              className={`
                                rounded-xl
                                px-3
                                py-2.5
                                text-sm
                                font-medium
                                transition
                                duration-300
                                ${
                                  preferredMethod === method
                                    ? "bg-[#D4AF37]/15 text-[#071426] border border-[#D4AF37]"
                                    : "border border-transparent bg-slate-50 text-slate-600 hover:border-[#D4AF37]/50"
                                }
                              `}
                            >
                              {method}
                            </button>

                          ))}

                        </div>

                      </div>

                    </div>


                    {/* Message */}

                    <div>

                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-semibold text-[#071426]"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Tell us about your requirements..."
                        className="
                          w-full
                          rounded-[20px]
                          border
                          border-slate-200
                          bg-white
                         !pl-6
                         !pr-6
                         py-4
                          text-base
                          text-slate-900
                          outline-none
                          transition
                          duration-300
                          placeholder:text-slate-400
                          focus:border-[#D4AF37]
                          focus:ring-4
                          focus:ring-[#D4AF37]/20
                          resize-none
                        "
                      />

                    </div>


                    {/* Submit Button */}

                    <button
                      type="submit"
                      className="
                        w-full
                        rounded-[20px]
                        bg-[#D4AF37]
                        w-[263px]
                        h-[40px]
                        text-lg
                        font-semibold
                        text-slate-950
                        transition
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_18px_60px_rgba(212,175,55,0.25)]
                      "
                    >
                      Send Message
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </motion.div>
          </div>


              
        {/* Space between last product card and footer */}
  <div className="h-5 w-full"></div>

      </div>

    </section>
  );
}