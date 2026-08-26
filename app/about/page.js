import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Travel Unbounded — India's most trusted experiential travel experts, headquartered in Bangalore with offices in Kerala and Nairobi.",
};

const offices = [
  {
    city: "Bengaluru — Headquarters",
    lines: [
      "541, 7th Main Rd, HAL 2nd Stage",
      "Indiranagar, Bengaluru – 560008",
      "India",
    ],
  },
  {
    city: "Kochi — Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palarivattom, Kochi – 682025", "India"],
  },
  {
    city: "Nairobi — Kenya Office",
    lines: [
      "Westpark Towers, Muthithi Road",
      "Nairobi, P.O. Box 6950",
      "Postal Code 00100, Kenya",
    ],
  },
];

const values = [
  {
    title: "Personally-Vetted Experiences",
    description:
      "Every destination, resort and activity we recommend has been personally experienced by someone on our team first.",
  },
  {
    title: "Local Guides",
    description:
      "We work with local experts who know the culture, the terrain and the stories that don't make it into guidebooks.",
  },
  {
    title: "Custom Itineraries",
    description:
      "No two travellers are alike, so no two itineraries are either — every trip is built around what matters to you.",
  },
  {
    title: "24x7 Support",
    description:
      "From the moment you enquire to the moment you're home, our team is a call or message away, any time zone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-72 sm:h-96 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
          alt="Team exploring a mountain trail"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-dark/60 flex items-center">
          <h1 className="max-w-6xl mx-auto px-5 sm:px-8 w-full font-display text-3xl sm:text-5xl font-semibold text-sand">
            Our Story
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <p className="text-amber font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm mb-4">
          India&apos;s Most Trusted Experiential Travel Experts
        </p>
        <p className="text-lg sm:text-xl font-display text-teal leading-relaxed mb-4">
          Travel Unbounded was born from a simple belief — the best journeys
          aren&apos;t sold from a catalogue. They&apos;re built around the
          people taking them.
        </p>
        <p className="text-charcoal/75 leading-relaxed mb-4">
          Headquartered in Bangalore with offices in Kerala and Nairobi, we
          design trips that blend comfort, culture and raw nature. Every
          destination, resort and activity we recommend has been personally
          experienced by our team.
        </p>
        <p className="text-charcoal/75 leading-relaxed">
          From spotting the Big Five at dawn in the Masai Mara to cruising Ha
          Long Bay at sunset — we go where real stories are written, and we
          bring you along.
        </p>
      </section>

      <section className="bg-white/60 py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-teal mb-8">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-sand rounded-2xl p-6 border border-teal/10"
              >
                <h3 className="font-display text-lg font-semibold text-teal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-teal mb-8">
          Our Offices
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className="rounded-2xl p-6 bg-teal text-sand"
            >
              <h3 className="font-display font-semibold mb-3">
                {office.city}
              </h3>
              <p className="text-sm text-sand/80 leading-relaxed">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
