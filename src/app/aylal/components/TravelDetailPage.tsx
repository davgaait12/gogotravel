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
  price: string;
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
    title: "Монголын нууцлаг 8 өдөр",
    subtitle: "Байгаль, түүх, соёлын аялал",
    mainImage: "/images/slide1.jpg",
    duration: "8 өдөр / 7 шөнө",
    price: "2,500,000₮",
    groupSize: "4-12 хүн",
    difficulty: "Дунд зэрэг",
    description:
      "Монгол орны байгалийн үзэсгэлэнт газрууд, түүхэн дурсгалт газрууд, номадын амьдралтай танилцах аялал. Бид таныг жинхэнэ Монголын соёл, уламжлалтай танилцуулах болно.",

    highlights: [
      {
        name: "Тэрэлжийн байгалийн цогцолборт газар",
        icon: "🏞️",
      },
      {
        name: "Чингис хааны морьт хөшөө",
        icon: "🗿",
      },
      {
        name: "Говийн элсэн манхан",
        icon: "🏜️",
      },
      {
        name: "Хархорумын эртний хот",
        icon: "🏛️",
      },
      {
        name: "Орхоны хүрхрээ",
        icon: "💦",
      },
      {
        name: "Цэнхэр халуун рашаан",
        icon: "♨️",
      },
      {
        name: "Нүүдэлчдийн амьдрал",
        icon: "🏕️",
      },
      {
        name: "Монгол гэрт хоноглох туршлага",
        icon: "⛺",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Улаанбаатар - Танилцах өдөр",
        activities: [
          { name: "Чингисийн талбай", icon: "🏛️" },
          { name: "Гандантэгчэнлин хийд", icon: "🏯" },
          { name: "Богд хааны ордон музей", icon: "🏰" },
          { name: "Зайсан толгой", icon: "🏔️" },
          { name: "Танилцах оройн хоол", icon: "🍽️" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "4 одтой зочид буудал",
        meals: ["Оройн хоол"],
      },
      {
        day: 2,
        title: "Тэрэлж - Байгалийн үзэсгэлэн",
        activities: [
          { name: "Тэрэлжийн байгалийн цогцолборт газар", icon: "🏞️" },
          { name: "Яст мэлхий хад", icon: "🪨" },
          { name: "Арьяабалын хийд", icon: "🏯" },
          { name: "Морин аялал", icon: "🐎" },
          { name: "Нүүдэлчин айлд зочлох", icon: "⛺" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Жуулчны бааз (гэр)",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },
      {
        day: 3,
        title: "Чингис хааны морьт хөшөө",
        activities: [
          { name: "Дэлхийн хамгийн том морьт хөшөө", icon: "🗿" },
          { name: "Музей үзэх", icon: "🏛️" },
          { name: "Морин тэрэг аялал", icon: "🐴" },
          { name: "Фото сессион", icon: "📸" },
          { name: "Монгол урлагийн тоглолт", icon: "🎭" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Жуулчны бааз (гэр)",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },
      {
        day: 4,
        title: "Өмнөговь - Баянзаг",
        activities: [
          { name: "Хойд говь руу аялах", icon: "🚗" },
          { name: "Баянзагийн улаан хад", icon: "🏜️" },
          { name: "Динозаврын үлдэц", icon: "🦖" },
          { name: "Говийн ургамал амьтан", icon: "🌵" },
          { name: "Говийн нар жаргах", icon: "🌅" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Жуулчны бааз (гэр)",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },
      {
        day: 5,
        title: "Хонгорын элс",
        activities: [
          { name: "Хонгорын элсэн манхан", icon: "🏜️" },
          { name: "Тэмээгээр аялах", icon: "🐪" },
          { name: "Элсэн дээр гулгах", icon: "🏄" },
          { name: "Нүүдэлчин айлд зочлох", icon: "🏠" },
          { name: "Элсэн дээр нар мандах", icon: "🌄" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Жуулчны бааз (гэр)",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },
      {
        day: 6,
        title: "Хархорум - Эртний нийслэл",
        activities: [
          { name: "Хархорумын музей", icon: "🏛️" },
          { name: "Эрдэнэзуу хийд", icon: "🏯" },
          { name: "Орхоны хөндий", icon: "🏞️" },
          { name: "Түүхэн дурсгалт газар", icon: "🗿" },
          { name: "Морин тоглоом үзэх", icon: "🏇" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Жуулчны бааз (гэр)",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },
      {
        day: 7,
        title: "Орхоны хүрхрээ - Цэнхэр рашаан",
        activities: [
          { name: "Орхоны хүрхрээ", icon: "💦" },
          { name: "Явган аялал", icon: "🚶" },
          { name: "Цэнхэр халуун рашаан", icon: "♨️" },
          { name: "Рашаанд орох", icon: "🧖" },
          { name: "Амралт, тайвшрал", icon: "🧘" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Рашааны амралтын газар",
        meals: ["Өглөөний цай", "Үдийн хоол", "Оройн хоол"],
      },

      {
        day: 8,
        title: "Улаанбаатар - Эргэн ирэх",
        activities: [
          { name: "Хөгнө хан уул", icon: "🏔️" },
          { name: "Элсэн тасархай", icon: "🏜️" },
          { name: "Улаанбаатар руу буцах", icon: "🚗" },
          { name: "Дурсгалын зураг худалдан авах", icon: "🛍️" },
          { name: "Үдэшлэгийн хоол", icon: "🍽️" },
        ],
        image: "/images/slide1.jpg",
        accommodation: "Аялал төгсөв",
        meals: ["Өглөөний цай", "Үдийн хоол", "Үдэшлэгийн хоол"],
      },
    ],

    included: [
      "Бүх тээвэрлэлт (автомашин)",
      "Зочид буудал, жуулчны баазын байр",
      "Өдөр бүр 3 удаагийн хоол",
      "Мэргэжлийн хөтөч, жолооч",
      "Үзвэрийн тасалбар",
      "Аялалын даатгал",
      "Орчуулга",
    ],

    notIncluded: [
      "Олон улсын нислэг",
      "Хувийн зардал",
      "Согтууруулах ундаа",
      "Цайны мөнгө",
    ],

    notes: [
      "Цаг агаарын байдлаас шалтгаалан маршрут өөрчлөгдөж болно",
      "Аялалд тохиромжтой хувцас, гутал авч явах",
      "Гэрэл зургийн аппарат, нэмэлт батерей авч явах",
      "Нарнаас хамгаалах хэрэгсэл бэлтгэх",
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
                  { label: tourData.groupSize, icon: "👥" },
                  { label: tourData.difficulty, icon: "💪" },
                  { label: tourData.price, icon: "💰", primary: true },
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

              <div className="mt-8 p-4 bg-teal-50 rounded-lg">
                <p className="text-teal-800 font-medium text-center">
                  Аялалын талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл
                </p>
                <button className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Холбогдох
                </button>
              </div>
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
                      {tourData.itinerary[activeDay - 1].meals.join(", ")}
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
