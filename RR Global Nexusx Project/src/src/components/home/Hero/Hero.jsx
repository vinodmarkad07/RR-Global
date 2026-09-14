import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#1E3A8A] to-[#2E86DE] min-h-screen flex items-center">

      {/* Background Glow */}
      <div className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full bg-[#2E86DE]/20 blur-[180px]" />

      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-[160px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Floating Lights */}
      <div className="absolute top-40 left-1/4 w-3 h-3 rounded-full bg-[#FF7A00] animate-pulse"></div>

      <div className="absolute bottom-40 right-1/4 w-4 h-4 rounded-full bg-[#2E86DE] animate-pulse"></div>

      <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-white animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 w-full">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <HeroContent />

          <HeroVisual />

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111827] to-transparent"></div>

    </section>
  );
}