import Image from "next/image";

export default function OurProjects() {
  const features = [
    {
      title: "Verified Listings",
      desc: "Each property is inspected and certified.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-[#873e23]">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Expert Agents",
      desc: "Get support from professional agents.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-[#873e23]">
          <path d="M2 21a8 8 0 0 1 13.292-6" />
          <circle cx="10" cy="8" r="5" />
          <path d="m16 19 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Affordable Plans",
      desc: "Find options that suit your budget.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-[#873e23]">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 text-center text-white bg-[#873e23]" id="102">
      <h2 className="text-3xl font-bold mb-10">Our Projects</h2>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((f, idx) => (
          <div key={idx} className="bg-[#fcf9cc] text-gray-800 p-6 rounded shadow hover:shadow-xl transition">
            {f.icon}
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Project Showcases */}
      <div className="mt-16 space-y-16 px-6 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/project1.jpg"
              alt="Modern Family Villa"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left text-white">
            <h3 className="text-2xl font-bold mb-2">Modern Family Villa</h3>
            <p className="text-lg leading-relaxed text-[#f0e8d8]">
              Discover comfort and elegance in this 5-bedroom villa nestled in a quiet suburban neighborhood. With a spacious backyard, smart home features, and premium finishes, it's ideal for families looking to upgrade their lifestyle.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:flex-row-reverse">
          <div className="text-left text-white">
            <h3 className="text-2xl font-bold mb-2">Urban City Apartment</h3>
            <p className="text-lg leading-relaxed text-[#f0e8d8]">
              Located in the heart of the city, this apartment offers stunning skyline views, modern interiors, and easy access to cafes, metro, and offices—perfect for professionals and small families.
            </p>
          </div>
          <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/project2.jpg"
              alt="Urban City Apartment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/project3.jpg"
              alt="Beachside Luxury Home"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left text-white">
            <h3 className="text-2xl font-bold mb-2">Beachside Luxury Home</h3>
            <p className="text-lg leading-relaxed text-[#f0e8d8]">
              Wake up to ocean views in this exquisite beachside property featuring floor-to-ceiling windows, an infinity pool, and direct beach access. An exceptional retreat for luxury seekers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
