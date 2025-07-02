'use client';
import Image from 'next/image';

export default function HeroSection2() {

  return (
    <section className="sticky top-0 -z-10 h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero2.jpg"
          alt="Luxury Building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
