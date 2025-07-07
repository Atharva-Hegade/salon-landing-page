import { useState } from "react";
import hairCareImg from "/assets/HairCare.jpg";
import skinCareImg from "/assets/SkinCare.jpg";
import makeupImg from "/assets/Makeup.jpg";
import nailsImg from "/assets/Nails.jpg";
import hairRemovalImg from "/assets/HairRemoval.jpg";

const serviceCategories = [
  {
    title: "Hair Care",
    image: hairCareImg,
    services: [
      "Creative Hair Cut", "Basic Hair Cut", "Advance Hair Cut", "Hair Rebonding",
      "Hair Straightening", "Hair Smoothening", "Ombre Hair Colour",
      "Balayage Hair Colour", "Hair Styling", "Hair Dressing",
      "Cysteine Hair Treatment", "Keratin Shine Straight", "Premium Hair Spa",
      "Hair Spa", "Deep Conditioning Spa", "Hair Spa For Coloured Hair",
      "Luxury Hair Spa", "Keratine-Cysteine Treatment"
    ],
  },
  {
    title: "Skin Care",
    image: skinCareImg,
    services: [
      "Facial", "Anti Acne Treatment", "Chemical Peel Treatment", "Pimple Treatment",
      "Skin Treatment", "Facial Wrinkles"
    ],
  },
  {
    title: "Makeup",
    image: makeupImg,
    services: ["Basic Makeup", "Bridal Makeup", "Bridal Package"],
  },
  {
    title: "Nails",
    image: nailsImg,
    services: ["Manicure", "Pedicure"],
  },
  {
    title: "Hair Removal",
    image: hairRemovalImg,
    services: ["Threading" , "Full Body Waxing"],
  },
  
];

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleCategory = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="services" className="bg-white py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {serviceCategories.map((category, index) => {
          const isExpanded = expanded[index];
          const visibleServices = isExpanded
            ? category.services
            : category.services.slice(0, 5);

          return (
            <div
              key={index}
              className="bg-pink-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-4 text-pink-700">
                  {category.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {visibleServices.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {category.services.length > 5 && (
                  <button
                    className="text-pink-600 mt-3 font-medium hover:underline"
                    onClick={() => toggleCategory(index)}
                  >
                    {isExpanded ? "Show Less ▲" : "Show More ▼"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
