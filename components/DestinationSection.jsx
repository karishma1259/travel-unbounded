import DestinationCard from "./DestinationCard";

export default function DestinationSection({ title, subtitle, destinations }) {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
      <div className="mb-8 max-w-xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-teal">
          {title}
        </h2>
        {subtitle && (
          <p className="text-charcoal/60 mt-2 text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
