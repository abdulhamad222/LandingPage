export default function FeaturesSection() {
  const features = [
    { title: "Verified Listings", desc: "Each property is inspected and certified." },
    { title: "Expert Agents", desc: "Get support from professional agents." },
    { title: "Affordable Plans", desc: "Find options that suit your budget." },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 rounded shadow">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
