import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSecition';
import Footer from '@/components/Footer';
import React from 'react';
import AboutCard from '@/components/AboutCard';
import OurProjects from '@/components/OurProjects';
import InteriorDesign from '@/components/Interior';

const Main = () => {
  const properties = [
    { image: "/images/house2.jpg", title: "Luxury Villa", price: "1,200,000" },
    { image: "/images/house3.jpg", title: "Downtown Apartment", price: "650,000" },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-6 bg-[#fcf9cc]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#873e23]">
          About EstatePro
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12 leading-relaxed">
          At EstatePro, we specialize in connecting you with your dream property — whether it’s a cozy family home, a modern apartment, or a luxurious villa. Our mission is to simplify real estate for everyone by offering trusted listings, expert guidance, and a seamless property buying experience.
        </p>

        {/* Cards */}
        <div className="flex justify-between gap-6 flex-wrap max-w-5xl mx-auto">
          {properties.slice(0, 2).map((p, i) => (
            <AboutCard key={i} {...p} />
          ))}
        </div>
      </section>

      <OurProjects />
      <InteriorDesign />
      <Footer />
    </div>
  );
};

export default Main;
