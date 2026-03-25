import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    location: "Tanzania",
    days: "5 days",
    category: "nature",
    price: "$1200",
    image:
      "https://raw.githubusercontent.com/muhammad7061/tourism-client/main/src/img/TZ/Serengeti%20National%20Park.jpg",
  },
  {
    id: 2,
    title: "Lamu Island Beach Retreat",
    location: "Kenya",
    days: "4 days",
    category: "beaches",
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 3,
    title: "Simien Mountains Trek",
    location: "Ethiopia",
    days: "6 days",
    category: "nature",
    price: "$950",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 4,
    title: "Zanzibar Spice Tour",
    location: "Tanzania",
    days: "2 days",
    category: "farms",
    price: "$450",
    image:
      "https://raw.githubusercontent.com/muhammad7061/tourism-client/5f3187dacb9e30fd2dbb29ba277030bb825562ca/src/img/TZ/Zanzibar.jpg",
  },
  {
    id: 5,
    title: "Nairobi City & Coffee Experience",
    location: "Kenya",
    days: "1 day",
    category: "restaurants",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 6,
    title: "Kakamega Forest Eco-Tour",
    location: "Kenya",
    days: "3 days",
    category: "forests",
    price: "$550",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

export default function PopularTours() {
  return (
    <section className="bg-gray-100 pb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Popular Tours
      </h2>
      <div className="max-w-[80%] mx-auto grid md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Link to={`/tours/${tour.id}`} key={tour.id}>
            <div className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer group">

              {/* Image with zoom */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-3 right-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                  {tour.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{tour.title}</h3>

                <div className="flex items-center text-gray-500 text-sm mt-1 mb-3">
                  <FaMapMarkerAlt className="mr-2" />
                  {tour.location}
                </div>

                <div className="flex justify-between">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {tour.days}
                  </span>

                  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize">
                    {tour.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}