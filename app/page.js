import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import { indiaDestinations, internationalDestinations } from "@/data/destinations";
import Link from "next/link";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Discover handpicked India and international travel packages with Travel Unbounded — India's most trusted experiential travel experts.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <DestinationSection
        title="India Destinations"
        subtitle="Handpicked journeys across the country, from backwaters to the Himalayas."
        destinations={indiaDestinations}
      />

      <DestinationSection
        title="International Destinations"
        subtitle="Safaris, coastlines and landscapes beyond India, personally experienced by our team."
        destinations={internationalDestinations}
      />

      <section className="bg-teal">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-sand">
            Ready to write your own story?
          </h2>
          <p className="text-sand/70 mt-3 max-w-xl mx-auto">
            Tell us where you want to go and we&apos;ll take care of the rest.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-amber hover:bg-amber-dark transition-colors text-sand font-semibold px-7 py-3.5 rounded-full text-sm sm:text-base"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>
    </>
  );
}
