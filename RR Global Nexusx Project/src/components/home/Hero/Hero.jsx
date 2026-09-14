import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#081C36]
      via-[#0B2545]
      to-[#1E3A8A]
      min-h-screen
      flex
      items-center
      "
    >

      {/* Blue Glow */}

      <div
        className="
        absolute
        -top-56
        -left-56
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#3B82F6]/20
        blur-[180px]
        "
      />

      {/* Right Glow */}

      <div
        className="
        absolute
        bottom-0
        -right-44
        w-[650px]
        h-[650px]
        rounded-full
        bg-[#60A5FA]/10
        blur-[170px]
        "
      />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "75px 75px",
          }}
        />

      </div>

      {/* Floating Lights */}

      <div className="absolute top-40 left-1/4 w-3 h-3 rounded-full bg-[#FF7A00] animate-pulse"></div>

      <div className="absolute bottom-44 right-1/4 w-4 h-4 rounded-full bg-[#60A5FA] animate-pulse"></div>

      <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-white animate-ping"></div>

      {/* Main Content */}

     <div
  className="relative z-10 w-full py-28"
  style={{ paddingLeft: "70px", paddingRight: "70px" }}
>

  <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
  
      <HeroContent />

      <HeroVisual />

     </div>   

      </div>

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-40
        bg-gradient-to-t
        from-[#F5F7FA]
        to-transparent
        "
      />

    </section>
  );
}