import Image from "next/image";
import 'animate.css';

export default function InteriorDesign() {
  const designs = [
    {
      title: "Luxury Living Room",
      description:
        "Experience a blend of elegance and comfort with our luxurious living room setups, featuring modern aesthetics and warm tones that bring serenity to your home.",
      image: "/images/interior1.jpg",
    },
    {
      title: "Contemporary Kitchen",
      description:
        "Our contemporary kitchens are designed with functionality in mind, combining minimalist layouts with high-end materials for the modern chef.",
      image: "/images/interior2.jpg",
    },
    {
      title: "Elegant Bedroom",
      description:
        "Rest in style with our custom bedroom interiors that focus on tranquility, lighting, and fine finishes for a peaceful night’s sleep.",
      image: "/images/interior3.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#fcf9cc]" id="interior">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#873e23] mb-12 animate__animated animate__fadeIn">
        Interior Designs
      </h2>

      <div className="grid gap-12 max-w-6xl mx-auto">
        {designs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md animate__animated animate__fadeIn"
          >
            {/* Image with shorter height */}
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text below image */}
            <div className="p-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#873e23] mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
