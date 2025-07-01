import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSecition'
import Navbar from '@/components/Navbar'
import PropertyCard from '@/components/PropertyCard'
import React from 'react'

const Main = () => {

  const properties = [
    { image: "/images/house1.avif", title: "Modern Family House", price: "450,000" },
    { image: "/images/house2.avif", title: "Luxury Villa", price: "1,200,000" },
    { image: "/images/house3.avif", title: "Downtown Apartment", price: "650,000" },
  ];

  return (
    <div>
        <Navbar />
      <HeroSection />
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </section>
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default Main
