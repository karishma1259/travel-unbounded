// Static/dummy destination data as allowed by the assignment.
// No database is used for this data — it is hardcoded here.

export const destinations = [
  // ---------- India ----------
  {
    id: 1,
    name: "Kerala",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description:
      "Drift through the calm backwaters on a traditional houseboat and unwind amid lush green coconut groves.",
    price: 22000,
    category: "india",
  },
  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    description:
      "Snow-capped peaks, pine forests and charming hill towns make this the perfect Himalayan getaway.",
    price: 18500,
    category: "india",
  },
  {
    id: 3,
    name: "Ladakh",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80",
    description:
      "High-altitude desert landscapes, turquoise lakes and monasteries perched on rugged mountains.",
    price: 27500,
    category: "india",
  },
  {
    id: 4,
    name: "Andaman",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1586183189334-1f4b8b2e0e4a?auto=format&fit=crop&w=800&q=80",
    description:
      "Powdery white beaches, coral reefs and crystal-clear waters ideal for diving and relaxing.",
    price: 24000,
    category: "india",
  },
  {
    id: 5,
    name: "Goa",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    description:
      "Golden beaches, vibrant nightlife and a laid-back Portuguese-influenced coastal culture.",
    price: 15000,
    category: "india",
  },

  // ---------- International ----------
  {
    id: 6,
    name: "Kenya",
    country: "Kenya",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    description:
      "Witness the Big Five on safari across the iconic Masai Mara savannah at sunrise.",
    price: 145000,
    category: "international",
  },
  {
    id: 7,
    name: "Vietnam",
    country: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    description:
      "Cruise past the limestone karsts of Ha Long Bay and explore vibrant street-food culture.",
    price: 68000,
    category: "international",
  },
  {
    id: 8,
    name: "Tanzania",
    country: "Tanzania",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80",
    description:
      "Trek the Serengeti plains and witness the Great Migration in one of Africa's wildest landscapes.",
    price: 152000,
    category: "international",
  },
  {
    id: 9,
    name: "Iceland",
    country: "Iceland",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=800&q=80",
    description:
      "Chase waterfalls, glaciers and the northern lights in this land of fire and ice.",
    price: 175000,
    category: "international",
  },
  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1586183189334-1f4b8b2e0e4a?auto=format&fit=crop&w=800&q=80",
    description:
      "Walk through misty tea plantations and golden coastlines steeped in ancient culture.",
    price: 42000,
    category: "international",
  },
];

export const indiaDestinations = destinations.filter(
  (d) => d.category === "india"
);

export const internationalDestinations = destinations.filter(
  (d) => d.category === "international"
);

export function getDestinationById(id) {
  return destinations.find((d) => d.id === Number(id));
}
