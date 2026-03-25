import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    location: "Serengeti National Park, Tanzania",
    country: "Tanzania",
    category: "nature",
    days: "5 days",
    date: "4/15/2026 - 4/20/2026",
    price: "$1200",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    description:
      "Experience the breathtaking wildlife of Serengeti National Park. Witness the great migration, spot the Big Five, and enjoy luxury camping under the African sky.",
    highlights: [
      "Game drives with experienced guides",
      "Witness the great wildebeest migration",
      "Luxury tented accommodation",
      "All meals included",
      "Airport transfers",
    ],
  },
];

export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) return <div className="p-10">Tour not found</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      {/* Back */}
      <Link to="/" className="text-sm text-gray-600 mb-4 inline-block">
        ← Back
      </Link>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Image */}
        <div className="relative">
          <img
            src={tour.image}
            className="w-full h-72 object-cover"
          />

          <span className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full shadow text-sm">
            {tour.price} / person
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{tour.title}</h1>

            <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
              Book Now
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-3">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt />
              {tour.location}
            </div>

            <div className="flex items-center gap-1">
              <FaClock />
              {tour.days}
            </div>

            <div className="flex items-center gap-1">
              <FaCalendarAlt />
              {tour.date}
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              {tour.country}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
              {tour.category}
            </span>
          </div>

          {/* About */}
          <div className="mt-6">
            <h2 className="font-semibold mb-2">About This Tour</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Tour Highlights</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              {tour.highlights.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* Info Box */}
          <div className="bg-green-50 p-4 rounded-xl mt-6 text-sm text-gray-700">
            <h3 className="font-semibold mb-2">Important Information</h3>
            <ul className="space-y-1">
              <li>- Minimum age requirement: 12 years</li>
              <li>- Maximum group size: 15 people</li>
              <li>- Free cancellation up to 7 days</li>
              <li>- Fitness level: Moderate</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}