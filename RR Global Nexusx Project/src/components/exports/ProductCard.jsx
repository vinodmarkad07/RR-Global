import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product, reverse = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 border-b border-gray-200 last:border-none"
    >
      <div
        className={`grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <Link to={`/export/${product.slug}`}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
            />
          </motion.div>
        </Link>

        {/* Content */}

        <div className="space-y-6 flex flex-col justify-center h-full">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold text-sm">
            Export Product
          </p>

          <Link to={`/export/${product.slug}`}>
            <h2 className="text-4xl font-bold text-[#071426] hover:text-[#D4AF37] transition cursor-pointer">
              {product.title}
            </h2>
          </Link>

          <Link to={`/export/${product.slug}`}>
            <p className="text-base md:text-lg leading-8 text-gray-600 hover:text-gray-800 transition cursor-pointer max-w-[34rem]">
              {product.description}
            </p>
          </Link>

          <Link
            to={`/export/${product.slug}`}
            className="inline-flex items-center gap-2 pt-3 text-[#D4AF37] font-semibold hover:gap-4 transition-all duration-300"
          >
            View Product

            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}