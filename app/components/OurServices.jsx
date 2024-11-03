import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    title: "Dinners",
    description:
      "Our award-winning venue is perfect for all of your awards, balls, proms, celebrations, and gala dinners.",
    image: "/images/services/services.png",
  },
  {
    id: 2,
    title: "Conferences",
    description:
      "A fantastic venue for conferences, with state-of-the-art facilities and spacious areas for networking.",
    image: "/images/services/services.png",
  },
  {
    id: 3,
    title: "Weddings",
    description:
      "Make your wedding day unforgettable in our beautiful venue with perfect ambiance and service.",
    image: "/images/services/services.png",
  },
];

export default function OurServices() {
  return (
    <section className="flex flex-col items-center bg-black text-white px-4 py-8">
      <h2 className="md:text-7xl text-4xl font-bold mb-10">OUR SERVICES</h2>
      <div className="space-y-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="w-9xl flex md:flex-row flex-col bg-[#1F2125] rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-8 md:flex-1 flex flex-col items-center md:items-baseline">
              <h3 className="text-2xl italic font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-base text-gray-300 mb-6">{service.description}</p>
              <button className="px-5 py-2 bg-orange-600 rounded-full text-white font-medium hover:bg-orange-700 transition-colors">
                Explore More
              </button>
            </div>
            <div className="relative md:w-1/2 h-full flex items-center">
              <div className="relative w-full h-64 m-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
