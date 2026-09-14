import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import exportProducts from "../../data/exportProducts";

export default function ExportSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center mb-28"
      >

    <div className="max-w-5xl text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
      <div className="w-20 h-[2px] bg-[#D4AF37]"></div>

      <span className="uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold">
        Export Categories
      </span>

      <div className="w-20 h-[2px] bg-[#D4AF37]"></div>
      </div>

      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] leading-tight">
      Our Premium Export Products
      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-center text-lg leading-9 text-gray-600">
      RR Global Nexusx exports premium agricultural and industrial
      products worldwide while maintaining international quality,
      reliable packaging, timely delivery and complete customer
      satisfaction.
      </p>
    </div>

  </motion.div>

        {/* Products */}

        {exportProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            reverse={index % 2 !== 0}
          />
        ))}

      </div>
    </section>
  );
}