import { Link } from "react-router-dom";

import productDetails from "../../../data/productDetails";

export default function RelatedProducts({ currentSlug }) {

  const products = productDetails.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="mt-40">

      <div className="text-center">

        <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
          More Products
        </p>

        <h2 className="text-5xl font-bold text-[#071426] mt-4">
          Related Products
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Explore more premium export products from RR Global Nexusx.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

        {products.map((product) => (

          <div
            key={product.slug}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >

            <img
              src={product.heroImage}
              alt={product.title}
              loading="lazy"
              className="w-full h-44 md:h-52 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-bold text-[#071426]">
                {product.title}
              </h3>

              <p className="mt-4 text-gray-600 line-clamp-3">
                {product.description}
              </p>

              <Link
                to={`/export/${product.slug}`}
                className="inline-block mt-8 bg-[#D4AF37] text-[#071426] px-6 py-3 rounded-xl font-semibold hover:bg-[#c89d21] transition"
              >
                Learn More →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}