import Link from 'next/link';

export default async function Navbar() {

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Utility Bar */}
      <div className="bg-[#006837] text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6 font-medium">
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/directory" className="hover:underline">Directory</Link>
          <Link href="/login" className="hover:underline font-bold">Member Login</Link>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-gray-900 leading-none">FGCW 06'</span>
          <span className="text-sm font-bold text-[#006837] tracking-[.25em] uppercase">Pro Unitate</span>
        </Link>
        
        <nav className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-700">
          <Link href="/network" className="hover:text-[#006837]">Network</Link>
          <Link href="/events" className="hover:text-[#006837]">Events</Link>
          <Link href="/volunteer" className="hover:text-[#006837]">Volunteer</Link>
          <Link href="/career" className="hover:text-[#006837]">Career</Link>
        </nav>
      </div>
    </header>
  );
}