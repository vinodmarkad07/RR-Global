import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery({ product }) {

  const images = [
    product.heroImage,
    ...product.types.map((item) => item.image),
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">

      <motion.div
        key={selectedImage}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full rounded-[24px] bg-[#f8f7f2] p-3 md:p-4"
      >
        <img
          src={selectedImage}
          alt=""
          className="w-full aspect-[16/12] object-cover rounded-[18px]"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mt-4">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`rounded-xl overflow-hidden border-2 transition ${
              selectedImage === image
                ? "border-[#D4AF37]"
                : "border-transparent"
            }`}
          >

            <img
              src={image}
              alt=""
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}