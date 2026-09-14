import { motion } from "framer-motion";

import officeImage from "../../assets/images/contact/contact-office.jpg";

export default function ContactForm() {
  return (
    <section className="py-32 bg-[#F8FAFC]">

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
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#071426]">
            We'd Love To
            <span className="text-[#D4AF37]">
              {" "}Hear From You
            </span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            Fill out the form below and our team will get back to you
            as soon as possible.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Contact Form */}

          <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>

  <div
    className="
      bg-white
      p-4
      rounded-[36px]
      shadow-[0_30px_80px_rgba(0,0,0,0.12)]
    "
  >

    <div className="mb-8 text-center">

  <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
    Visit Us
  </p>


  <p className="mt-3 text-gray-600 leading-8 max-w-md mx-auto">
    Meet our team and discuss your export, import, legal or cyber security
    requirements in person.
  </p>

</div>

    <img
      src={officeImage}
      alt="Office"
      className="
        w-full
        max-w-[500px]
        h-[540px]
        object-cover
        rounded-[28px]
        hover:scale-[1.02]
        transition-all
        duration-500
      "
    />

  </div>

</motion.div>

            <form className="space-y-8">

              {/* Full Name */}

              <div>

                <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    w-full
                    px-6
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-gray-200
                    shadow-sm
                    focus:border-[#D4AF37]
                    focus:ring-4
                    focus:ring-[#D4AF37]/20
                    outline-none
                    transition-all
                    duration-300
                  "
                />

              </div>

              {/* Email */}

              <div>

                <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-6
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-gray-200
                    shadow-sm
                    focus:border-[#D4AF37]
                    focus:ring-4
                    focus:ring-[#D4AF37]/20
                    outline-none
                    transition-all
                    duration-300
                  "
                />

              </div>

              {/* Phone + Company */}

              <div className="grid md:grid-cols-2 gap-8">

                <div>

                  <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full
                      px-6
                      py-4
                      rounded-2xl
                      bg-white
                      border
                      border-gray-200
                      shadow-sm
                      focus:border-[#D4AF37]
                      focus:ring-4
                      focus:ring-[#D4AF37]/20
                      outline-none
                      transition-all
                      duration-300
                    "
                  />

                </div>

                <div>

                  <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your company"
                    className="
                      w-full
                      px-6
                      py-4
                      rounded-2xl
                      bg-white
                      border
                      border-gray-200
                      shadow-sm
                      focus:border-[#D4AF37]
                      focus:ring-4
                      focus:ring-[#D4AF37]/20
                      outline-none
                      transition-all
                      duration-300
                    "
                  />

                </div>

              </div>

              {/* Service */}

              <div>

                <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                  Service Required
                </label>

                <select
                  className="
                    w-full
                    px-6
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-gray-200
                    shadow-sm
                    focus:border-[#D4AF37]
                    focus:ring-4
                    focus:ring-[#D4AF37]/20
                    outline-none
                    transition-all
                    duration-300
                  "
                >

                  <option>Select a Service</option>
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

              {/* Message */}

              <div>

                <label className="block mb-3 font-semibold tracking-wide text-[#071426]">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your requirements..."
                  className="
                    w-full
                    px-6
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-gray-200
                    shadow-sm
                    focus:border-[#D4AF37]
                    focus:ring-4
                    focus:ring-[#D4AF37]/20
                    outline-none
                    transition-all
                    duration-300
                    resize-none
                  "
                ></textarea>

              </div>

              {/* Button */}

              <div className="pt-4">

                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#D4AF37]
                    text-[#071426]
                    py-5
                    rounded-2xl
                    font-bold
                    text-lg
                    tracking-wide
                    hover:-translate-y-1
                    hover:shadow-2xl
                    hover:shadow-yellow-500/40
                    transition-all
                    duration-300
                  "
                >
                  Send Message
                </button>

              </div>

            </form>

          {/* Office Image */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

           

          </motion.div>

        </div>

      </div>

    </section>
  );
}