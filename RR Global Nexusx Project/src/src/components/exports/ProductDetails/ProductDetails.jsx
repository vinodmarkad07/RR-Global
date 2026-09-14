import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

import productDetails from "../../../data/productDetails";
import ProductHero from "./ProductHero";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = productDetails.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-[#F8FAFC] py-24 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}

        <Link
          to="/export"
          className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back to Export Products
        </Link>

        {/* Hero */}

        <div className="mt-12">
          <ProductHero product={product} />
        </div>

        {/* ===================== TYPES ===================== */}

        <section className="mt-36">

          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Product Variants
            </p>

            <h2 className="text-5xl font-bold text-[#071426] mt-4 text-center">
              Available Types
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8 text-center max-w-4xl">
              Choose from our premium export-quality product variants
              manufactured according to international standards.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

            {product.types.map((type, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >

                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-8 flex flex-col flex-grow gap-4">

                  <h3 className="text-2xl font-bold text-[#071426]">
                    {type.name}
                  </h3>

                  <p className="text-base leading-8 text-gray-600 flex-grow px-1">
                    {type.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ===================== SPECIFICATIONS ===================== */}

        <section className="mt-40">

          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Product Details
            </p>

            <h2 className="text-5xl font-bold text-[#071426] mt-4 text-center">
              Specifications
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 mt-16 overflow-hidden">

            <div className="hidden md:grid md:grid-cols-[260px_1fr] gap-3 bg-[#f6f2e8] px-5 py-4 rounded-2xl text-sm font-semibold uppercase tracking-[3px] text-[#7a5a09] text-center">
              <span>Attribute</span>
              <span>Details</span>
            </div>

            <div className="mt-2 md:mt-4">
              {Object.entries(product.specifications).map(
                ([key, value], index) => (

                  <div
                    key={key}
                    className={`grid gap-3 py-5 md:grid-cols-[260px_1fr] md:items-center md:px-5 text-center ${
                      index !== Object.keys(product.specifications).length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >

                    <span className="text-base md:text-lg font-semibold text-[#071426]">
                      {key}
                    </span>

                    <span className="text-base md:text-lg text-gray-600 md:pl-6 md:border-l md:border-gray-200">
                      {value}
                    </span>

                  </div>

                )
              )}
            </div>

          </div>

        </section>

        {/* Space */}

        <div className="h-28"></div>

        {/* ===================== APPLICATIONS ===================== */}

        <section>

          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Industries
            </p>

            <h2 className="text-5xl font-bold text-[#071426] mt-4 text-center">
              Applications
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {product.applications.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 min-h-[110px] flex items-center justify-center gap-5 text-center"
              >

                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">

                  <CheckCircle
                    className="text-[#D4AF37]"
                    size={28}
                  />

                </div>

                <span className="text-xl font-medium text-[#071426]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </section>

        <div className="h-24"></div>

      </div>

    </section>
  );
}