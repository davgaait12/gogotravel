"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import the Next.js Image component

interface Activity {
  name: string;
  icon?: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
  image: string;
  accommodation: string;
  meals: string[];
}

interface Highlight {
  name: string;
  icon: string;
}

interface TourData {
  title: string;
  subtitle: string;
  mainImage: string;
  duration: string;
  price: {
    adult: string;
    child: string;
    child2?: string;
    infant: string;
  };
  groupSize: string;
  difficulty: string;
  description: string;
  highlights: Highlight[];
  itinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  notes: string[];
}

const TravelDetailMongolian = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tourData: TourData = {
    title: "Улаанбаатар - Ордос - Хайнан Аялал",
    subtitle: "7 шөнө / 8 өдөр",
    mainImage: "/img/hainan.jpg",
    duration: "7 шөнө / 8 өдөр",
    price: {
      adult: "3,100,000₮",
      child: "2,750,000₮",
      child2: "2,550,000₮",
      infant: "650,000₮",
    },
    groupSize: "4-12 хүн",
    difficulty: "Хөнгөн",
    description:
      "Улаанбаатар - Ордос - Хайнан аялалд хамрагдаж, Номхон далайд завиар аялах, Атлантис усан паркд зугаалах, Саньяа хотын үзэсгэлэнт газруудаар аялж, Ордос хотын Чингисийн онгоныг үзэх болно.",

    highlights: [
      {
        name: "Номхон далайд завиар аялах",
        icon: "🚢",
      },
      {
        name: "Нисдэг тэргэнд суух",
        icon: "🚁",
      },
      {
        name: "Атлантис усан парк",
        icon: "🏊",
      },
      {
        name: "Далайн эрэг дээрх РЕСОРТ буудал",
        icon: "🏨",
      },
      {
        name: "Саньяа хотын шөнийн зах",
        icon: "🏮",
      },
      {
        name: "Ордос хотын Чингисийн онгон",
        icon: "🏯",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Өдөр 1 - Улаанбаатар-Ордос-Хайнан",
        activities: [
          {
            name: "Чингис хаан олон улсын нисэх буудлаас Ордос чиглэлд нисэх",
            icon: "✈️",
          },
          {
            name: "Ордос хотноо аяллын хөтөч тосож авна",
            icon: "🧑‍🦱",
          },
          {
            name: "Хайнан руу нисэх",
            icon: "✈️",
          },
        ],
        image: "/img/hainan1.jpg",
        accommodation: "Саньяа Миншэн далайн эрэг дээрх РЕСОРТ буудал",
        meals: ["Аялагч хувьдаа"],
      },
      {
        day: 2,
        title: "Өдөр 2 - Номхон далайд завиар аялах",
        activities: [
          {
            name: "Өглөөний цайны дараа Номхон далайд завиар аялана (3 цаг)",
            icon: "🚢",
          },
          {
            name: "Далайд тоглох боломж (шүхрээр нисэх, усны мото машин г.м)",
            icon: "🏄",
          },
          {
            name: "Нисдэг тэргэнд сууж үзэх баяхан бэлэгтэй",
            icon: "🚁",
          },
        ],
        image: "/img/hainan2.jpg",
        accommodation: "Саньяа Миншэн далайн эрэг дээрх РЕСОРТ буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол"],
      },
      {
        day: 3,
        title: "Өдөр 3 - Атлантис усан парк",
        activities: [
          {
            name: "Зочид буудалдаа өглөө цайгаа уусны дараа Атлантис усан паркд өдөрийг өнгрөөнө",
            icon: "🏊",
          },
          {
            name: "Орой нь шөнийн зах болох жижиг худалдаагаар тойрох боломжтой",
            icon: "🏮",
          },
        ],
        image: "/img/hainan3.jpeg",
        accommodation: "Саньяа Миншэн далайн эрэг дээрх РЕСОРТ буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол"],
      },
      {
        day: 4,
        title: "Өдөр 4 - Чөлөөт өдөр",
        activities: [
          {
            name: "Хотоор дэлгүүр хэсэх",
            icon: "🛍️",
          },
          {
            name: "Буудалдаа амрах",
            icon: "🛌",
          },
          {
            name: "Усанд сэлэх",
            icon: "🏊",
          },
          {
            name: "Далайн эрэг хүрэх",
            icon: "🏖️",
          },
        ],
        image: "/img/hainan4.jpg",
        accommodation: "Саньяа Миншэн далайн эрэг дээрх РЕСОРТ буудал",
        meals: ["Өглөөний цай"],
      },
      {
        day: 5,
        title: "Өдөр 5 - Чөлөөт өдөр",
        activities: [
          {
            name: "Саньяа хотын бусад үзвэрийг хөтөчөөсөө зөвөлгөө аван үзэх боломжтой",
            icon: "🗺️",
          },
          {
            name: "Буудалдаа амрах",
            icon: "🛌",
          },
          {
            name: "Усанд сэлэх",
            icon: "🏊",
          },
        ],
        image: "/img/hainan4.jpg",
        accommodation: "Саньяа Миншэн далайн эрэг дээрх РЕСОРТ буудал",
        meals: ["Өглөөний цай"],
      },
      {
        day: 6,
        title: "Өдөр 6 - Саньяа-Ордос",
        activities: [
          {
            name: "Өглөөний цайны дараа чөлөөт цагтай",
            icon: "⏰",
          },
          {
            name: "Үдийн хойно нисэх буудалруу хүрж Ордос хотлуу буцна",
            icon: "✈️",
          },
        ],
        image: "/img/hainan1.jpg",
        accommodation: "Нисэхийн хариат буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол"],
      },
      {
        day: 7,
        title: "Өдөр 7 - Ордос хот",
        activities: [
          {
            name: "Өглөөний цайны дараа Ордос хотоор явж танилцана",
            icon: "🚌",
          },
          {
            name: "Чингисийн онгоныг үзэх",
            icon: "🏯",
          },
        ],
        image: "/img/hainanme.jpg",
        accommodation: "Нисэхийн хариат буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 8,
        title: "Өдөр 8 - Ордос-Улаанбаатар",
        activities: [
          {
            name: "Буудалд өглөөний цайгаа уусны дараа Улаанбаатар хотруу нисэж аялал өндөрлөнө",
            icon: "✈️",
          },
        ],
        image: "/img/ub.jpg",
        accommodation: "Аялал төгсөв",
        meals: ["Өглөөний цай"],
      },
    ],

    included: [
      "УБ-Ордос-Хайнан - Хайнан-Ордос-УБ ирж очих нислэгийн тийз",
      "Хөтөлбөрт заагдсан зочид буудалын төлбөр",
      "Хөтөлбөрт заагдсан аяллын үзвэр үйлчилгээний төлбөр",
      "Аяллын тээврийн зардал",
      "Хөтөлбөрт заагдсан өглөө, өдөр, оройн хоол",
      "Мэргэжлийн туршлагатай хөтөч (Хятад Монгол хэлтэй)",
      "Гадаад аяллын даатгал (БНХАУ-ын талдаа даатгал хийгдэнэ)",
    ],

    notIncluded: [
      "Аялагчийн хувийн хэрэглээний зардал",
      "Чөлөөт өдрийн хоол, унаа, хөтчийн зардал",
      "Хөтөлбөрт заагдаагүй үзвэр үйлчигээг нэмэлтээр авах тохиолдолд түүний төлбөр",
      "Хөтөч жолоочид өгөх гарын мөнгө буюу TIP (заавал өгөх зүйл биш)",
    ],

    notes: [
      "Том хүний үнэ: 3,100,000₮",
      "Хүүхэд: 12 наснаас доош 120 см дээш - 2,750,000₮",
      "12 наснаас доош 120см доош - 2,550,000₮",
      "Нярай: 0-2 нас - 650,000₮",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-parallax">
          <div className="relative w-full h-full">
            {/* First img tag replaced with Next.js Image */}
            <Image
              src={tourData.mainImage}
              alt={tourData.title}
              className="object-cover transform scale-110 transition-transform duration-1000 hover:scale-100"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full flex items-end pb-16">
          <div className="container mx-auto px-4">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {tourData.title}
              </h1>
              <p className="text-xl md:text-3xl text-gray-200 mb-8">
                {tourData.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: tourData.duration, icon: "⏰" },
                  {
                    label: `Том хүн: ${tourData.price.adult}`,
                    icon: "👨",
                    primary: true,
                  },
                  {
                    label: `Хүүхэд: ${tourData.price.child}`,
                    icon: "👧",
                    primary: true,
                  },
                  {
                    label: `Хүүхэд 2: ${tourData.price.child2}`,
                    icon: "👦",
                    primary: true,
                  },
                  {
                    label: `Нярай: ${tourData.price.infant}`,
                    icon: "👶",
                    primary: true,
                  },
                ].map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      item.primary
                        ? "bg-teal-600 text-white"
                        : "bg-white/90 text-gray-900"
                    } px-6 py-3 rounded-full font-medium flex items-center gap-2 transform hover:scale-105 transition-transform`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Аяллын танилцуулга
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              {tourData.description}
            </p>

            <h3 className="text-2xl font-bold mb-6">Онцлох зүйлс</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {tourData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{highlight.icon}</span>
                  <span className="text-gray-700 font-medium">
                    {highlight.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Багтсан зүйлс</h3>
              <ul className="space-y-3 mb-8">
                {tourData.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-6">Багтаагүй зүйлс</h3>
              <ul className="space-y-3">
                {tourData.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold">
                      ×
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Itinerary Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
            8 өдрийн аялалын хөтөлбөр
          </h2>

          {/* Day buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tourData.itinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeDay === day.day
                    ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                <span className="absolute -top-3 -right-3 w-6 h-6 bg-teal-500 text-white rounded-full text-xs flex items-center justify-center">
                  {day.day}
                </span>
                <span className="text-lg">Өдөр {day.day}</span>
                <span className="block text-sm mt-1 opacity-75">
                  {day.title.split("-")[1]?.trim()}
                </span>
              </button>
            ))}
          </div>

          {/* Active day content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[500px] md:h-auto">
                {/* Second img tag replaced with Next.js Image */}
                <Image
                  src={tourData.itinerary[activeDay - 1].image}
                  alt={tourData.itinerary[activeDay - 1].title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Өдөр {activeDay}</h3>
                  <p className="text-xl">
                    {tourData.itinerary[activeDay - 1].title}
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Үйл ажиллагаа
                  </h4>
                  <ul className="space-y-3">
                    {tourData.itinerary[activeDay - 1].activities.map(
                      (activity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                        >
                          <span className="text-xl">{activity.icon}</span>
                          <span className="text-gray-700">{activity.name}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span>🏨</span>
                      Байрлах газар
                    </h4>
                    <p className="text-gray-700">
                      {tourData.itinerary[activeDay - 1].accommodation}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span>🍽️</span>
                      Хоол
                    </h4>
                    <p className="text-gray-700">
                      {tourData.itinerary[activeDay - 1].meals.length > 0
                        ? tourData.itinerary[activeDay - 1].meals.join(", ")
                        : "Багтаагүй"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
      </div>
    </div>
  );
};

export default TravelDetailMongolian;
