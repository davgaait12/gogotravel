import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InternationalTour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: {
    adult: string;
    child: string;
  };
  country: string;
  region: string;
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
      id: 3,
      title: "Жинин-Хөх хот-Мини Аватар",
      description:
        "Өвөр монголын Жинин, Хөх хот, Мини Аватар паркын үзэсгэлэнт газруудаар аялаарай",
      image: "/img/miniavatarapark.jpg",
      duration: "6 шөнө 7 өдөр",
      price: {
        adult: "890,000₮",
        child: "700,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "Jinin-Blue-City-Mini-Avatar",
    },
    {
      id: 4,
      title: "Жинин-Хөх хотын усан парктай аялал",
      description:
        "Өвөр монголын Жинин, Хөх хотын усан паркуудаар зугаацаж, алжаал тайлаарай",
      image: "/img/jwp.jpeg",
      duration: "6 шөнө 7 өдөр",
      price: {
        adult: "890,000₮",
        child: "700,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "Jining-Blue-City-has-water-park",
    },
    {
      id: 5,
      title: "3 хотын Датонг FANTA WILD - Мини Атавар",
      description:
        "Өвөр монголын 3 хотоор аялж, Датонг хотын FANTA WILD паркаар зугаацаарай",
      image: "/img/fantawild-datong.jpg",
      duration: "6 шөнө 7 өдөр",
      price: {
        adult: "900,000₮",
        child: "715,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "3CityDatongFANTAWILD-MiniAtavar",
    },
  ],
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              {title}
            </h2>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-600 rounded-full"></div>
          </div>
          <Link
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
          </Link>
        </div>

        {/* Tour cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {tour.country}
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 min-h-[48px]">
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
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-teal-600 font-bold text-xl mb-1">
                      Том хүн: {tour.price.adult}
                    </div>
                    <div className="text-teal-600 font-medium">
                      Хүүхэд: {tour.price.child}
                    </div>
                  </div>
                </div>

                <Link
                  href={tour.link}
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Дэлгэрэнгүй</span>
                  <div className="absolute inset-0 bg-teal-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalTours;
