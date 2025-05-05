import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: {
    adult: string;
    child: string;
  };
  destination: string;
  link: string;
}

interface FeaturedToursProps {
  title?: string;
  tours?: Tour[];
}

const FeaturedTours: React.FC<FeaturedToursProps> = ({
  title = "Онцлох аялалууд",
  tours = [
    {
      id: 6,
      title: "Токио фүжи аялал",
      description:
        "Японы нийслэл Токио, Фүжи уулын хөлийн халуун рашаан, аутлетээр аялаарай",
      image: "/img/tokyo-fuji.jpg",
      duration: "4 шөнө 5 өдөр",
      price: {
        adult: "2,800,000₮ + Тийз",
        child: "2,600,000₮ + Тийз",
      },
      destination: "Япон",
      link: "tokyo",
    },
    {
      id: 1,
      title: "Бээжин Universal studio аялал",
      description:
        "Бээжин хотын гайхамшигт газруудаар аялж, Universal studio-д зочлоорой",
      image: "/img/beijing-universal.jpg",
      duration: "7 шөнө 8 өдөр",
      price: {
        adult: "1,650,000₮",
        child: "1,450,000₮",
      },
      destination: "БНХАУ",
      link: "Beijing-Universal-studio-tour",
    },
    {
      id: 3,
      title: "Газар нислэг хосолсон Шанхай Диснэйлэнд аялал",
      description:
        "Шанхай хотын алдарт эх газрын Диснэйлэндээр аялж, гайхамшигт цагийг өнгөрүүлээрэй",
      image: "/img/shd.jpg",
      duration: "8 шөнө 9 өдөр",
      price: {
        adult: "2,800,000₮",
        child: "2,100,000₮",
      },
      destination: "БНХАУ",
      link: "Shanghai-Disneyland-combined-flight-and-land-trip",
    },
  ],
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {tour.destination}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 min-h-[48px]">
                  {tour.description}
                </p>

                {/* Details */}
                <div className="flex justify-between items-start mb-6">
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
                  <div className="text-right">
                    <div className="text-teal-600 font-bold text-lg">
                      Том хүн: {tour.price.adult}
                    </div>
                    <div className="text-teal-600 text-sm">
                      Хүүхэд: {tour.price.child}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href={`/${tour.link}`}
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 relative overflow-hidden group"
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

export default FeaturedTours;
