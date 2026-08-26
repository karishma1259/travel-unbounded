import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  const { name, country, image, description, price } = destination;

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-teal/5">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-semibold text-teal">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-wide text-sage mt-0.5 mb-2">
          {country}
        </p>
        <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-teal/10">
          <span className="text-sm font-semibold text-charcoal">
            Starting ₹{price.toLocaleString("en-IN")}
          </span>
          <Link
            href="/contact"
            className="text-xs font-semibold text-amber hover:text-amber-dark transition-colors"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </div>
  );
}
