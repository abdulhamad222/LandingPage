import Image from 'next/image';

export default function AboutCard({ image, title, price }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition" id='101'>
      <Image src={image} alt={title} width={400} height={250} />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-blue-600 font-bold mt-2">${price}</p>
      </div>
    </div>
  );
}
