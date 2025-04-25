import React from "react";
import Image from "next/image";

interface InternationalTour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  country: string;
  link: string;
}

interface InternationalToursProps {
  title?: string;
  tours?: InternationalTour[];
}

const InternationalTours: React.FC<InternationalToursProps> = ({
  title = "Гадаад аялал",
  tours = [
    {
      id: 1,
      title: "Европын бүлэг аялал",
      description: "Франц, Итали, Герман, Чех улсуудаар аялах",
      image: "/images/slide1.jpg",
      duration: "14 хоног",
      price: "5,500,000₮",
      country: "Европ",
      link: "#",
    },
    {
      id: 2,
      title: "Сингапур, Малайз аялал",
      description: "Зүүн өмнөд Азийн гайхамшигтай хотуудаар аялах",
      image: "/images/slide1.jpg",
      duration: "7 хоног",
      price: "2,800,000₮",
      country: "Ази",
      link: "#",
    },
    {
      id: 3,
      title: "АНУ-ын баруун эрэг",
      description: "Лос Анжелес, Сан Франциско, Лас Вегас  ",
      image: "/images/slide1.jpg",
      duration: "10 хоног",
      price: "6,200,000₮",
      country: "АНУ",
      link: "#",
    },
    {
      id: 4,
      title: "Египетийн соёл",
      description: "Пирамид, Сфинкс, Нил мөрний аялал",
      image: "/images/slide1.jpg",
      duration: "8 хоног",
      price: "3,500,000₮",
      country: "Африк",
      link: "#",
    },
  ],
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              {title}
            </h2>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-600 rounded-full"></div>
          </div>
          <a
            href="/internationalTours"
            className="group flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors duration-300"
          >
            Бүгдийг үзэх
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <div className="relative w-full h-56">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Country Badge */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  {tour.country}
                </div>

                {/* Popular Badge (optional) */}
                {tour.id === 1 && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Хит
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 min-h-[40px]">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm font-medium">{tour.duration}</span>
                  </div>

                  <div className="bg-teal-50 px-4 py-2 rounded-lg">
                    <span className="text-teal-600 font-bold">
                      {tour.price}
                    </span>
                  </div>
                </div>

                <a
                  href={tour.link}
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Дэлгэрэнгүй</span>
                  <div className="absolute inset-0 bg-teal-700 transform translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0"></div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
            <div className="text-gray-600">Баталгаат аялал</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-teal-600 mb-2">10к+</div>
            <div className="text-gray-600">Аялагч</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
            <div className="text-gray-600">Жилийн туршлага</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Дэмжлэг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalTours;
