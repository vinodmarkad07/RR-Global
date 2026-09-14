import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function ProductCard({ product, reverse = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 border-b border-gray-200 last:border-none"
    >
      <div
        className={`grid lg:grid-cols-2 gap-20 lg:gap-24 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <Link to={`/import/${product.slug}`}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[340px] object-cover hover:scale-110 transition duration-700"
            />
          </motion.div>
        </Link>

        {/* Content */}

        <div>
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm">
            Imported Product
          </p>

          <Link to={`/import/${product.slug}`}>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#071426] hover:text-[#D4AF37] transition">
              {product.title}
            </h2>
          </Link>

          <p className="mt-7 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Features */}

          <div className="flex flex-wrap gap-3 mt-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-full border border-gray-200"
              >
                <ShieldCheck
                  size={16}
                  className="text-[#D4AF37]"
                />

                <span className="text-sm font-medium text-[#071426]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}

          <Link
            to={`/import/${product.slug}`}
            className="inline-flex items-center gap-3 mt-10 bg-[#071426] text-white px-7 py-4 rounded-xl hover:bg-[#123A6B] transition-all duration-300"
          >
            View Complete Details

            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}