"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    title: "Газар нислэг хосолсон Шанхай Диснэйлэнд аялал",
    subtitle: "0-2 нас хүртэл үнэгүй",
    mainImage: "/img/shd.jpg",
    duration: "8 шөнө / 9 өдөр",
    price: {
      adult: "2,800,000₮",
      child: "2,100,000₮",
    },
    groupSize: "4-12 хүн",
    difficulty: "Дунд зэрэг",
    description:
      "Газар нислэг хосолсон Шанхай Диснэйлэнд аялалаар та бүхэн Шанхай хотын алдарт эх газрын Диснэйлэнд үзэж, Сувдан цамхаг, Ю гарден цэцэрлэгт хүрээлэн, Намжин гудамж, Зэрлэг амьтны хүрээлэн зэрэг газруудаар аялах болно.",

    highlights: [
      {
        name: "Шанхай Диснэйлэнд",
        icon: "🏰",
      },
      {
        name: "Сувдан цамхаг",
        icon: "🗼",
      },
      {
        name: "Ю гарден цэцэрлэгт хүрээлэн",
        icon: "🏞️",
      },
      {
        name: "Зэрлэг амьтны хүрээлэн",
        icon: "🦁",
      },
      {
        name: "Хуанфү гол дээр усан онгоцоор аялах",
        icon: "🚢",
      },
      {
        name: "Шөнийн Бунд",
        icon: "🌃",
      },
      {
        name: "Жинин хотын халуун рашаан",
        icon: "♨️",
      },
      {
        name: "FLORENTA OUTLET шоппинг",
        icon: "🛍️",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Өдөр 1 - Улаанбаатар-Замын үүд",
        activities: [
          { name: "15:30 минутад цуглах", icon: "⏰" },
          {
            name: "16:50 минутын галт тэргээр УБ-Замын үүд сумруу хөдлөх",
            icon: "🚂",
          },
          { name: "Галт тэргэнд хооллох", icon: "🍽️" },
          { name: "Күпей ангилалд зорчих", icon: "🚃" },
        ],
        image: "/img/shd1.jpeg",
        accommodation: "Галт тэрэг (күпей ангилал)",
        meals: ["Оройн хоол"],
      },
      {
        day: 2,
        title: "Өдөр 2 - Замын үүд-Эрээн-Жинин",
        activities: [
          { name: "07:20 минутад галт тэрэгнээс буух", icon: "🚂" },
          { name: "Хил гарах", icon: "🚌" },
          { name: "Эрээн хотод хүрэх", icon: "🏙️" },
          {
            name: "Үдийн цайны дараа Жинин хотын зүг хөдлөх (4-5 цаг)",
            icon: "🚌",
          },
          {
            name: "33 төрлийн халуун рашаан бүхий WATER WORD амралт",
            icon: "♨️",
          },
        ],
        image: "/img/shd2.jpg",
        accommodation: "Жинин хотын зочид буудал",
        meals: ["Буфет хоол"],
      },
      {
        day: 3,
        title: "Өдөр 3 - Жинин-Хөх хот-Шанхай",
        activities: [
          { name: "Өглөөний цай (Буфет)", icon: "☕" },
          { name: "Худалдааны төвөөр дэлгүүр хэсэх", icon: "🛍️" },
          {
            name: "Үдийн хоолны дараа Хөх хотруу хөдлөх",
            icon: "🚌",
          },
          { name: "20:55 минутын нислэгээр Шанхай хот руу нисэх", icon: "✈️" },
        ],
        image: "/img/ereenhot.jpg",
        accommodation: "Шанхай хотын зочид буудал",
        meals: ["Өглөөний цай", "Оройн хоол"],
      },
      {
        day: 4,
        title: "Өдөр 4 - Шанхай",
        activities: [
          { name: "Өглөөний цай", icon: "☕" },
          { name: "Метрогоор хотын төв рүү зорчих", icon: "🚇" },
          { name: "Сувдан цамхаг үзэх, 5D үзвэр үзэх", icon: "🗼" },
          { name: "Хуанфү голыг усан онгоцоор гатлах", icon: "🚢" },
          { name: "Ю гарден цэцэрлэгт хүрээлэн үзэх", icon: "🏞️" },
          { name: "Намжин гудамжаар шоппинг хийх", icon: "🛍️" },
          { name: "Шөнийн Шанхайн алдарт Бунд", icon: "🌃" },
        ],
        image: "/img/shd4.jpg",
        accommodation: "Шанхай хотын зочид буудал",
        meals: ["Өглөөний цай", "Оройн хоол"],
      },
      {
        day: 5,
        title: "Өдөр 5 - Шанхай Диснэйлэнд",
        activities: [
          { name: "Өглөөний цай", icon: "☕" },
          { name: "Алдарт эх газрын Диснэйлэнд очих", icon: "🏰" },
          { name: "Бүхэл өдөржин Диснэйлэндэд зугаалах", icon: "🎢" },
        ],
        image: "/img/shd5.jpg",
        accommodation: "Шанхай хотын зочид буудал",
        meals: ["Өглөөний цай", "Оройн хоол"],
      },
      {
        day: 6,
        title: "Өдөр 6 - Шанхай зэрлэг амьтны хүрээлэн",
        activities: [
          { name: "Өглөө 8 цагт өглөөний цай", icon: "☕" },
          { name: "Зэрлэг амьтны хүрээлэн үзэх", icon: "🦁" },
          { name: "Амьтдын циркийн үзүүлбэр үзэх", icon: "🎪" },
          { name: "Ховор амьтад харах", icon: "🦒" },
        ],
        image: "/img/amitan.jpeg",
        accommodation: "Шанхай хотын зочид буудал",
        meals: ["Өглөөний цай", "Оройн хоол"],
      },
      {
        day: 7,
        title: "Өдөр 7 - Шанхай-Хөх хот",
        activities: [
          { name: "Өглөөний цай", icon: "☕" },
          { name: "FLORENTA OUTLET дэлгүүрт шоппинг хийх", icon: "🛍️" },
          { name: "Хөх хот руу нисэх", icon: "✈️" },
        ],
        image: "/img/shd7.jpeg",
        accommodation: "Хөх хотын зочид буудал",
        meals: ["Өглөөний цай"],
      },
      {
        day: 8,
        title: "Өдөр 8 - Хөх хот-Эрээн-Замын үүд",
        activities: [
          { name: "Өглөөний цай", icon: "☕" },
          { name: "Хөх хотоос Эрээн хотын зүг хөдлөх", icon: "🚌" },
          { name: "Хил гааль гарах", icon: "🚶" },
          { name: "Замын үүд сумд ирэх", icon: "🏙️" },
          {
            name: "18:00 цагт галт тэрэгт суун УБ хотын зүг хөдлөх",
            icon: "🚂",
          },
        ],
        image: "/img/shd8.jpg",
        accommodation: "Галт тэрэг",
        meals: ["Өглөөний цай"],
      },
      {
        day: 9,
        title: "Өдөр 9 - Улаанбаатар",
        activities: [
          { name: "Өглөө 09:20 цагт Улаанбаатар хотод ирэх", icon: "🚂" },
          { name: "Аялал өндөрлөх", icon: "🏁" },
        ],
        image: "/img/ub.jpg",
        accommodation: "Аялал төгсөв",
        meals: [],
      },
    ],

    included: [
      "Улаанбаатар-Замын үүд-Улаанбаатар чиглэлийн унтлагын вагоны билет",
      "Замын үүд-Эрээн-Замын үүд чиглэлийн олон улсын автобусны билет",
      "Хөх хот-Шанхай, Шанхай-Хөх хот 2 талын нислэгийн тийз",
      "Хөтөлбөрт заагдсан зочид буудлын төлбөр",
      "Хөтөлбөрт заагдсан аяллын үзвэр үйлчилгээний төлбөр",
      "Аяллын тээврийн зардал",
      "Хөтөлбөрт заагдсан өглөө, өдөр, оройн хоол",
      "Мэргэжлийн туршлагатай хөтөч (Хятад Монгол хэлтэй)",
      "Гадаад аяллын даатгал (БНХАУ-ын талдаа даатгал хийгдэнэ)",

      "      Стандарт 2 ортой өрөө ",
    ],

    notIncluded: [
      "Аялагчийн хувийн хэрэглээний зардал",
      "Замын хүнс, аяллын туршид өдрийн хоол",
      "Хөтөлбөрт заагдаагүй үзвэр үйлчигээг нэмэлтээр авах тохиолдолд түүний төлбөр",
      "Хөтөч жолоочид өгөх гарын мөнгө буюу TIP (заавал өгөх зүйл биш)",
      "Хөтөлбөрт заагдаагүй өглөө, оройн хоол",
    ],

    notes: [
      "Паспортын хүчинтэй хугацаа 6 сараас дээш байх",
      "Хүүхдийн үнэ: 2-11 нас хүртэлх 2,100,000₮",
      "0-2 нас хүртэл үнэгүй",
      "Том хүний үнэ: 2,800,000₮",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-parallax">
          <div className="relative w-full h-full">
            <Image
              src={tourData.mainImage}
              alt={tourData.title}
              fill
              className="object-cover transform scale-110 transition-transform duration-1000 hover:scale-100"
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
            9 өдрийн аялалын хөтөлбөр
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
                <Image
                  src={tourData.itinerary[activeDay - 1].image}
                  alt={tourData.itinerary[activeDay - 1].title}
                  fill
                  className="object-cover"
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
                      {tourData.itinerary[activeDay - 1].meals.join(", ") ||
                        "Байхгүй"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailMongolian;
