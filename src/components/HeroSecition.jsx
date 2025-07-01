import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh]">
      <Image
        src="/images/hero-bg.jpg"
        alt="Luxury House"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-10">
        <h2 className="text-5xl font-bold">Find Your Dream Home</h2>
        <p className="mt-4 text-lg">Luxury real estate for everyone</p>
        <button className="mt-6 px-6 py-3 bg-[#873e23] text-white rounded">Browse Listings</button>
      </div>
    </section>
  );
}
