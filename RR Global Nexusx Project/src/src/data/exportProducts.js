import jaggery from "../assets/images/export/jaggery/jaggery.jpg";
import turmeric from "../assets/images/export/turmeric/turmeric.jpg";
import metalSprings from "../assets/images/export/metal-springs/metal-springs.jpg";
import organicFertilizer from "../assets/images/export/organic-fertilizers/organic-fertilizer.jpg";

const exportProducts = [
  {
    id: 1,

    slug: "jaggery",

    title: "Jaggery",

    image: jaggery,

    shortDescription:
      "Premium export-quality Indian jaggery manufactured using traditional methods while maintaining international quality standards.",

    description:
      "RR Global Nexusx exports premium-quality jaggery sourced directly from trusted Indian manufacturers. Our jaggery is naturally processed without harmful chemicals, ensuring excellent taste, purity, and nutritional value for international markets.",

    types: [
      "Cube Jaggery",
      "Powder Jaggery",
      "Liquid Jaggery",
      "Organic Jaggery",
      "Palm Jaggery",
    ],

    applications: [
      "Food Industry",
      "Retail Supply",
      "Pharmaceutical Industry",
      "Sweet Manufacturing",
      "Export Wholesale",
    ],

    specifications: {
      Origin: "India",
      Packaging: "25kg / 50kg Bags",
      Quality: "Export Grade",
      ShelfLife: "12 Months",
    },
  },

  {
    id: 2,

    slug: "turmeric",

    title: "Turmeric",

    image: turmeric,

    shortDescription:
      "High-curcumin turmeric carefully selected for global food, pharmaceutical and wellness industries.",

    description:
      "RR Global Nexusx exports premium Indian turmeric with high curcumin content, natural color, and excellent aroma. Our turmeric products meet international export standards and are available in multiple forms.",

    types: [
      "Finger Turmeric",
      "Turmeric Powder",
      "Turmeric Bulb",
      "Organic Turmeric",
      "Polished Turmeric",
    ],

    applications: [
      "Food Processing",
      "Pharmaceutical Industry",
      "Ayurvedic Products",
      "Spice Manufacturing",
      "Nutraceuticals",
    ],

    specifications: {
      Origin: "India",
      Packaging: "25kg / 50kg Bags",
      Quality: "Premium Export Grade",
      ShelfLife: "24 Months",
    },
  },

  {
    id: 3,

    slug: "metal-springs",

    title: "Metal Springs",

    image: metalSprings,

    shortDescription:
      "Precision-engineered industrial springs manufactured for automotive, engineering and heavy industries.",

    description:
      "RR Global Nexusx exports premium-quality industrial metal springs manufactured using high-grade steel with excellent durability and precision for global industries.",

    types: [
      "Compression Spring",
      "Extension Spring",
      "Torsion Spring",
      "Stainless Steel Spring",
      "Custom Spring",
    ],

    applications: [
      "Automobile Industry",
      "Engineering",
      "Industrial Machinery",
      "Manufacturing",
      "Heavy Equipment",
    ],

    specifications: {
      Material: "High Carbon Steel",
      Finish: "Customized",
      Quality: "Industrial Grade",
      Standard: "International",
    },
  },

  {
    id: 4,

    slug: "organic-fertilizers",

    title: "Organic Fertilizers",

    image: organicFertilizer,

    shortDescription:
      "Eco-friendly organic fertilizers supporting sustainable agriculture and improved soil fertility.",

    description:
      "RR Global Nexusx exports premium-quality organic fertilizers produced using environmentally friendly methods. Our fertilizers improve soil health, increase crop productivity, and promote sustainable farming practices.",

    types: [
      "Vermicompost",
      "Neem Cake",
      "Bone Meal",
      "Seaweed Fertilizer",
      "Organic Manure",
    ],

    applications: [
      "Agriculture",
      "Organic Farming",
      "Horticulture",
      "Greenhouse Farming",
      "Plant Nutrition",
    ],

    specifications: {
      Origin: "India",
      Packaging: "25kg / 50kg Bags",
      Quality: "Premium Organic",
      ShelfLife: "24 Months",
    },
  },
];

export default exportProducts;