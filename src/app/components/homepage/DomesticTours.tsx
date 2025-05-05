import React from "react";
import Image from "next/image";

interface DomesticTour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  location: string;
  link: string;
}

interface DomesticToursProps {
  title?: string;
  tours?: DomesticTour[];
}

const DomesticTours: React.FC<DomesticToursProps> = ({
  title = "Дотоод аялал",
  tours = [
    {
      id: 1,
      title: "Тун удахгүй",
      description: "Говийн гайхамшигт байгаль, түүх соёлтой танилцах аялал",
      image: "/images/slide1.jpg",
      duration: "5 хоног",
      price: "450,000₮",
      location: "Говь-Алтай",
      link: "#",
    },
    {
      id: 2,
      title: "Тун удахгүй",
      description: "Монголын далай гэгддэг Хөвсгөл нуурын эрэг дагуух аялал",
      image: "/images/slide1.jpg",
      duration: "7 хоног",
      price: "650,000₮",
      location: "Хөвсгөл",
      link: "#",
    },
    {
      id: 3,
      title: "Хархорин, Өгий нуур",
      description: "Эртний нийслэл Хархорин, Өгий нуурын байгалийн үзэсгэлэн",
      image: "/images/slide1.jpg",
      duration: "3 хоног",
      price: "350,000₮",
      location: "Өвөрхангай",
      link: "#",
    },
    {
      id: 4,
      title: "Тэрэлж, Горхи-Тэрэлж",
      description: "Улаанбаатарын ойролцоох байгалийн цогцолборт газар",
      image: "/images/slide1.jpg",
      duration: "2 хоног",
      price: "250,000₮",
      location: "Төв аймаг",
      link: "#",
    },
  ],
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            href="/domestic"
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

                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  {tour.location}
                </div>
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
        ;{/* Decorative Elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomesticTours;
