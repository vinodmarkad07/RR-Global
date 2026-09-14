import { motion } from "framer-motion";
import {
  Shield,
  Globe2,
  Award,
  CheckCircle2,
} from "lucide-react";

import ProductCard from "./ProductCard";
import importProducts from "../../data/importProducts";

export default function ImportSection() {
  return (
    <section
  className="bg-white pb-28"
  style={{ paddingTop: "25px" }}
>
  <div className="w-full mx-auto px-6 md:px-8 lg:px-[45px]">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center  
          -w-4xl mx-auto"
        >

          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm">
            Global Imports
          </p> 
          

      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#071426] leading-tight">
            Premium Imported
            <br />
            Safety Goggles
          </h2>

          <p
  className="mt-8 text-lg leading-9 text-gray-600"
  style={{
    width: "calc(100% - 80px)",
    marginLeft: "40px",
    marginRight: "40px",
  }}
>
            
            RR Global Nexusx imports world-class safety goggles
            designed for industrial, medical, laboratory, sports,
            and commercial applications. Every product is sourced
            from trusted international manufacturers and complies
            with global safety standards.
            
          </p>

        </motion.div>

        {/* Highlights */}

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24"
  style={{
    width: "calc(100% - 80px)",
    marginLeft: "40px",
    marginRight: "40px",
  }}
>

  <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center min-h-[170px] flex flex-col justify-start">
  <Globe2
    className="mx-auto text-[#D4AF37]"
    size={30}
  />

  <h3 className="mt-3 text-lg font-bold text-[#071426]">
    Global Sourcing
  </h3>

  <p className="mt-2 text-sm text-gray-600 leading-6">
    Imported from trusted international manufacturers.
  </p>
</div>

<div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center min-h-[170px] flex flex-col justify-start">
  <Shield
    className="mx-auto text-[#D4AF37]"
    size={30}
  />

  <h3 className="mt-3 text-lg font-bold text-[#071426]">
    Certified Safety
  </h3>

  <p className="mt-2 text-sm text-gray-600 leading-6">
    Products manufactured according to global standards.
  </p>
</div>

<div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center min-h-[170px] flex flex-col justify-start">
  <Award
    className="mx-auto text-[#D4AF37]"
    size={30}
  />

  <h3 className="mt-3 text-lg font-bold text-[#071426]">
    Premium Quality
  </h3>

  <p className="mt-2 text-sm text-gray-600 leading-6">
    Durable materials with long service life.
  </p>
</div>

<div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center min-h-[170px] flex flex-col justify-start">
  <CheckCircle2
    className="mx-auto text-[#D4AF37]"
    size={30}
  />

  <h3 className="mt-3 text-lg font-bold text-[#071426]">
    Bulk Supply
  </h3>

  <p className="mt-2 text-sm text-gray-600 leading-6">
    Wholesale quantities for industries and distributors.
  </p>
</div>

        </motion.div>

        {/* Products */}

        <div className="mt-28">

  {importProducts.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      reverse={index % 2 !== 0}
    />
  ))}

  {/* Space between last product card and footer */}
  <div className="h-15 w-full"></div>

</div>

      </div>

    </section>
  );
} 