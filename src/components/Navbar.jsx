import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">EstatePro</h1>
      <div className="space-x-6">
        <Link href="#">Home</Link>
        <Link href="#">Properties</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
      </div>
    </nav>
  );
}
