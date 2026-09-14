import { CheckCircle } from "lucide-react";
import ProductGallery from "./ProductGallery";

export default function ProductHero({ product }) {
  return (
    <section className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-stretch">

      <div className="rounded-[28px] bg-white/80 p-3 shadow-[0_20px_60px_rgba(7,20,38,0.08)] backdrop-blur-sm">
        <ProductGallery product={product} />
      </div>

      <div className="rounded-[28px] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(7,20,38,0.08)] flex flex-col justify-center text-center lg:text-left gap-6">

        <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm">
          Export Product
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#071426] leading-tight">
          {product.title}
        </h1>

        <p className="text-[17px] leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
          {product.description}
        </p>

        <div className="space-y-4 flex flex-col items-center lg:items-start">

          <div className="flex items-center gap-3 text-[15px] text-[#071426] font-medium">
            <CheckCircle className="text-[#D4AF37]" size={20} />
            Export Quality
          </div>

          <div className="flex items-center gap-3 text-[15px] text-[#071426] font-medium">
            <CheckCircle className="text-[#D4AF37]" size={20} />
            Natural Processing
          </div>

          <div className="flex items-center gap-3 text-[15px] text-[#071426] font-medium">
            <CheckCircle className="text-[#D4AF37]" size={20} />
            International Packaging
          </div>

        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

          <button className="bg-[#D4AF37] hover:bg-[#c99c18] px-7 py-3.5 rounded-xl font-semibold text-[#071426] transition">
            Request Quote
          </button>

          <button className="border-2 border-[#071426] text-[#071426] px-7 py-3.5 rounded-xl font-semibold hover:bg-[#071426] hover:text-white transition">
            Download Brochure
          </button>

        </div>

      </div>

    </section>
  );
}