'use client';
import Image from 'next/image';
import 'animate.css';

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

      <div className="h-full flex flex-col justify-center items-center text-center px-6 animate__animated animate__fadeInDown">
        <h2
          className={'font-bold text-white transition-transform duration-500 sm:text-4xl md:text-5xl'}
        >
          Find Your Dream Home
        </h2>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
          Luxury real estate for everyone
        </p>
      </div>
    </section>
  );
}
