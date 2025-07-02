import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#873e23] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">EstatePro</h1>
          <p className="text-sm text-[#f0e8d8]">
            Your trusted partner in finding dream homes, modern apartments, and
            premium interiors.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:underline text-[#f0e8d8]">
                About
              </Link>
            </li>
            <li>
              <Link href="#ourproject" className="hover:underline text-[#f0e8d8]">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="#interior" className="hover:underline text-[#f0e8d8]">
                Interior
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline text-[#f0e8d8]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-[#f0e8d8]">Email: contact@estatepro.com</p>
          <p className="text-sm text-[#f0e8d8]">Phone: +92 300 1234567</p>
          <p className="text-sm text-[#f0e8d8]">
            Office: 123 Estate Street, Islamabad
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-[#e8d9b4] pt-6 text-sm text-center text-[#f0e8d8]">
        &copy; {new Date().getFullYear()} EstatePro. All rights reserved.
      </div>
    </footer>
  );
}
