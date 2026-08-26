import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
        alt="Mountain valley at sunrise"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/40 to-teal-dark/10" />

      <div className="relative h-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-16 sm:pb-20">
        <p className="text-amber font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
          Journeys built around you
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-semibold text-sand max-w-2xl leading-tight">
          India&apos;s Most Trusted Experiential Travel Experts
        </h1>
        <p className="text-sand/80 mt-5 max-w-lg text-base sm:text-lg">
          The best journeys aren&apos;t sold from a catalogue — they&apos;re
          built around the people taking them. Let&apos;s design yours.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-amber hover:bg-amber-dark transition-colors text-sand font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
