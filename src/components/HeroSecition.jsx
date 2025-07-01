'use client';
import Image from 'next/image';

export default function HeroSection() {

  return (
    <section className="sticky top-0 -z-10 h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/house1.jpg"
          alt="Luxury House"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="h-full flex flex-col justify-center items-center text-center px-6">
        <h2
          className={'font-bold text-white transition-transform duration-500 sm:text-4xl md:text-5xl'}
        >
          Find Your Dream Home
        </h2>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
          Luxury real estate for everyone
        </p>
        <button className="mt-6 px-6 py-3 bg-[#873e23] text-white hover:bg-[#833e26] rounded text-sm md:text-base">
          Browse Listings
        </button>
      </div>
    </section>
  );
}
