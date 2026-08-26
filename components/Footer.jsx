import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-sand/90 mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-sand mb-2">
            Travel Unbounded
          </p>
          <p className="text-sm text-sand/70 leading-relaxed">
            India&apos;s most trusted experiential travel experts. Journeys
            built around people, not catalogues.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-sand mb-3 uppercase tracking-wide">
            Offices
          </p>
          <ul className="text-sm text-sand/70 space-y-2 leading-relaxed">
            <li>Bengaluru — HAL 2nd Stage, Indiranagar</li>
            <li>Kochi — S Janatha Road, Palarivattom</li>
            <li>Nairobi — Muthithi Road, Westlands</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-sand mb-3 uppercase tracking-wide">
            Quick Links
          </p>
          <ul className="text-sm text-sand/70 space-y-2">
            <li>
              <Link href="/" className="hover:text-sand">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sand">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sand">
                Plan Your Trip
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand/10 py-4 text-center text-xs text-sand/50">
        © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
      </div>
    </footer>
  );
}
