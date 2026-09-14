import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="mt-28 bg-gradient-to-b from-[#081C36] via-[#0B2545] to-[#071426] text-white overflow-hidden">

      <div className="w-full flex flex-col items-center px-6 py-20">

      

    

        {/* Divider */}

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

        {/* Social Icons */}

        <div className="flex justify-center gap-6 mt-16 pt-4">

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071426] transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071426] transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#071426] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

        </div>

        {/* Contact */}

        <div className="mt-12 w-full flex flex-wrap justify-center items-center gap-10 text-gray-300 text-center">

          <div className="flex items-center gap-3">

            <Phone
              className="text-[#D4AF37]"
              size={20}
            />

            <span>+91 8623803992</span>

          </div>

          <div className="flex items-center gap-3">

            <Mail
              className="text-[#D4AF37]"
              size={20}
            />

            <span>rr@rrglobalnexusx.com</span>

          </div>

          <div className="flex items-center gap-3">

            <MapPin
              className="text-[#D4AF37]"
              size={20}
            />

            <span>Pune, Maharashtra, India</span>

          </div>

        </div>

        

        {/* Bottom */}

        <div className="mt-24 pt-20 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">

            © 2026 RR Global Nexusx. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}