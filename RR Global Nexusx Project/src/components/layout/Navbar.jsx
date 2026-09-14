import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../assets/logo/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Export", path: "/export" },
    { name: "Import", path: "/import" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
          ? "h-20 bg-gradient-to-r from-[#0B2545]/95 via-[#123A73]/95 to-[#0B2545]/95 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] border-b border-white/10"
          : "h-24 bg-gradient-to-r from-[#0B2545]/80 via-[#123A73]/80 to-[#0B2545]/80 backdrop-blur-2xl border-b border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 group"
          >
            <div
              className="
                w-16
                h-16
                rounded-full
                overflow-hidden
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-2
                drop-shadow-xl
              "
            >
              <img
                src={logo}
                alt="RR Global Nexusx"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-[28px] font-black tracking-wide text-white">
                RR GLOBAL
              </h2>

              <p className="text-xs tracking-[8px] uppercase text-[#D4AF37]">
                Nexusx
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-12">

            {navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-2 font-semibold text-[15px] uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`
                        absolute
                        left-1/2
                        bottom-1
                        h-[2px]
                        rounded-full
                        origin-center
                        bg-[#D4AF37]
                        transition-all
                        duration-300
                        ${
                          isActive
                          ? "w-full -translate-x-1/2"
                          : "w-0 -translate-x-1/2 group-hover:w-full"
                        }
                      `}
                    ></span>
                  </>
                )}
              </NavLink>

            ))}

          </nav>

          {/* Get Quote */}

          <div className="hidden lg:block">

            <button
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r from-[#D4AF37] to-[#E8C55B]
                text-[#071426]
                w-[150px]
                h-[40px]
                rounded-2xl
                border border-yellow-200/30
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1 hover:scale-105
                hover:shadow-2xl
                hover:shadow-yellow-500/30
              "
            >
              Get Quote

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen
              ? "max-h-[500px]"
              : "max-h-0"
          }`}
        >
          <div className="bg-gradient-to-b from-[#0B2545] to-[#123A73] backdrop-blur-xl border-t border-white/10 px-6 py-8">

            <div className="flex flex-col gap-6">

              {navLinks.map((link) => (

                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-white/5 pb-4 text-lg transition-all duration-300 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white hover:text-[#D4AF37]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}

              <button
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#D4AF37]
                  text-[#071426]
                  py-3
                  rounded-xl
                  font-semibold
                  hover:shadow-xl
                  transition-all
                "
              >
                Get Quote

                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </header>

      {/* Spacer */}

      <div
        className={`transition-all duration-500 ${
          scrolled ? "h-20" : "h-24"
        }`}
      ></div>
    </>
  );
}