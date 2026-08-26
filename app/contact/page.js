import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Plan Your Trip",
  description:
    "Send us your travel enquiry and our experts will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <p className="text-amber font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm mb-4">
          Let&apos;s plan it together
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-teal mb-4">
          Tell us about your trip
        </h1>
        <p className="text-charcoal/70 leading-relaxed mb-6">
          Share a few details about where and when you&apos;d like to travel,
          and one of our travel experts will reach out within 24 hours with a
          custom itinerary.
        </p>
        <ul className="space-y-3 text-sm text-charcoal/70">
          <li className="flex gap-2">
            <span className="text-amber">✓</span> Personally-vetted stays and
            experiences
          </li>
          <li className="flex gap-2">
            <span className="text-amber">✓</span> Custom itineraries, not
            fixed packages
          </li>
          <li className="flex gap-2">
            <span className="text-amber">✓</span> 24x7 support before and
            during your trip
          </li>
        </ul>
      </div>

      <BookingForm />
    </section>
  );
}
