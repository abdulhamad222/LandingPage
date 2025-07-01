import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSecition';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import React from 'react';
import AboutCard from '@/components/AboutCard';

const Main = () => {
  const properties = [
    { image: "/images/house1.jpg", title: "Modern Family House", price: "450,000" },
    { image: "/images/house2.jpg", title: "Luxury Villa", price: "1,200,000" },
    { image: "/images/house3.jpg", title: "Downtown Apartment", price: "650,000" },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#873e23]">
          About EstatePro
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12 leading-relaxed">
          At EstatePro, we specialize in connecting you with your dream property — whether it’s a cozy family home, a modern apartment, or a luxurious villa. Our mission is to simplify real estate for everyone by offering trusted listings, expert guidance, and a seamless property buying experience.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <AboutCard key={i} {...p} />
          ))}
        </div>
      </section>

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Main;
