"use client";
import React, { useState } from "react";

interface DayItinerary {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

const TravelDetailModern = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "itinerary" | "gallery" | "details"
  >("overview");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const tourData = {
    title: "ГОВЬ-ХАНГАЙН НУУЦ",
    subtitle: "8 өдрийн адал явдал",
    mainImage: "/api/placeholder/1920/1080",
    duration: "8 хоног",
    season: "5-9 сар",
    difficulty: "Дунд",
    groupSize: "6-12",
    price: "2,800,000₮",
    overview: {
      description:
        "Монголын өвөрмөц байгаль, түүх соёлыг нэг дор судлах боломж. Говийн элсэн манхан, Хангайн уулс, эртний хот суурин, нүүдэлчдийн амьдралтай танилцах аялал.",
      highlights: [
        "Хонгорын элс - Монголын хамгийн өндөр элсэн манхан",
        "Баянзаг - Динозаврын үлдэц олдсон газар",
        "Хархорум - Эртний Монголын нийслэл",
        "Цэнхэр халуун рашаан",
        "Орхоны хүрхрээ",
        "Өгий нуур",
      ],
      included: [
        "Бүх тээвэрлэлт",
        "Зочид буудал, гэрийн байр",
        "Өдөр бүр 3 удаагийн хоол",
        "Мэргэжлийн хөтөч",
        "Үзвэрийн тасалбар",
        "Аялалын даатгал",
      ],
      notIncluded: ["Олон улсын нислэг", "Виз", "Хувийн зардал", "Цайны мөнгө"],
    },
    itinerary: [
      {
        day: 1,
        title: "Улаанбаатар - Баянзаг",
        description:
          "Өглөө эрт Улаанбаатараас хөдөлж, Өмнөговь аймгийн Баянзаг руу явна.",
        highlights: [
          "Цагаан суварга",
          "Баянзагийн улаан хад",
          "Динозаврын музей",
          "Говийн нар жаргалт",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 2,
        title: "Баянзаг - Хонгорын элс",
        description:
          "Монголын хамгийн том элсэн манхан Хонгорын элс рүү аялна.",
        highlights: [
          "Хонгорын элсэн дээр алхах",
          "Тэмээгээр аялах",
          "Элсэн манханаас нар мандах үзэх",
          "Нүүдэлчин айлд зочлох",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 3,
        title: "Хонгорын элс - Ёлын ам",
        description: "Говь гурван сайхан уулын нэг Ёлын ам руу аялна.",
        highlights: [
          "Ёлын амаар явган аялал",
          "Мөнх цас, мөсөн гол",
          "Говийн ургамал, амьтад",
          "Музей үзэх",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 4,
        title: "Ёлын ам - Өгий нуур",
        description: "Говиос Хангайн бүс рүү шилжиж, Өгий нуур руу явна.",
        highlights: [
          "Өгий нуурын эрэг",
          "Шувуу ажиглах",
          "Загас барих",
          "Нуурын эргээр алхах",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 5,
        title: "Өгий нуур - Хархорин",
        description: "Эртний Монголын нийслэл Хархорум руу аялна.",
        highlights: [
          "Эрдэнэзуу хийд",
          "Хархорумын музей",
          "Их Монгол улсын түүх",
          "Уламжлалт урлаг үзэх",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 6,
        title: "Хархорин - Орхоны хүрхрээ",
        description: "Орхоны хөндийн үзэсгэлэнт газруудаар аялна.",
        highlights: [
          "Орхоны хүрхрээ",
          "Морин аялал",
          "Нүүдэлчин айлд зочлох",
          "Монгол гэрт хоноглох",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 7,
        title: "Орхон - Цэнхэр халуун рашаан",
        description: "Цэнхэрийн халуун рашаанд амарч тайвширна.",
        highlights: [
          "Халуун рашаанд орох",
          "Байгалийн үзэсгэлэн",
          "Амралт, тайвшрал",
          "Явган аялал",
        ],
        image: "/api/placeholder/800/600",
      },
      {
        day: 8,
        title: "Цэнхэр - Улаанбаатар",
        description: "Улаанбаатар руу буцах замдаа Хөгнө хан уулаар зогсоно.",
        highlights: [
          "Хөгнө хан уул",
          "Элсэн тасархай",
          "Эрдэнэ сант хийд",
          "Аялалын хураангуй",
        ],
        image: "/api/placeholder/800/600",
      },
    ],
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <div className="relative h-screen">
        <img
          src={tourData.mainImage}
          alt={tourData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4">
            {tourData.title}
          </h1>
          <div className="w-24 h-0.5 bg-white mb-4" />
          <p className="text-xl md:text-2xl font-light">{tourData.subtitle}</p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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

      {/* Quick Info Bar */}
      <div className="sticky top-0 bg-white border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-sm text-gray-500">Хугацаа</p>
                <p className="font-medium">{tourData.duration}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Улирал</p>
                <p className="font-medium">{tourData.season}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Хүндрэл</p>
                <p className="font-medium">{tourData.difficulty}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Бүлэг</p>
                <p className="font-medium">{tourData.groupSize}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Үнэ</p>
              <p className="text-2xl font-bold text-teal-600">
                {tourData.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b sticky top-16 bg-white z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {["overview", "itinerary", "gallery", "details"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "overview" && "Танилцуулга"}
                {tab === "itinerary" && "Хөтөлбөр"}
                {tab === "gallery" && "Зургийн цомог"}
                {tab === "details" && "Дэлгэрэнгүй"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === "overview" && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8">Аяллын танилцуулга</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                {tourData.overview.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Онцлох газрууд</h3>
                  <ul className="space-y-3">
                    {tourData.overview.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Үнэд багтсан</h3>
                  <ul className="space-y-3">
                    {tourData.overview.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-green-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-medium mt-8 mb-4">
                    Үнэд багтаагүй
                  </h3>
                  <ul className="space-y-3">
                    {tourData.overview.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-red-600">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "itinerary" && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">
              8 өдрийн хөтөлбөр
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {tourData.itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`p-4 rounded-lg transition-all ${
                    selectedDay === day.day
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <p className="font-medium">Өдөр {day.day}</p>
                  <p className="text-sm mt-1 opacity-80">{day.title}</p>
                </button>
              ))}
            </div>

            {selectedDay && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={tourData.itinerary[selectedDay - 1].image}
                    alt={tourData.itinerary[selectedDay - 1].title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">
                    Өдөр {selectedDay}:{" "}
                    {tourData.itinerary[selectedDay - 1].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {tourData.itinerary[selectedDay - 1].description}
                  </p>
                  <h4 className="font-medium mb-3">Өдрийн онцлох зүйлс:</h4>
                  <ul className="space-y-2">
                    {tourData.itinerary[selectedDay - 1].highlights.map(
                      (highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}

            {!selectedDay && (
              <div className="text-center text-gray-500">
                <p>Өдөр сонгоно уу</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "gallery" && (
          <div>
            <h2 className="text-3xl font-light mb-12 text-center">
              Зургийн цомог
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tourData.gallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12">Нэмэлт мэдээлэл</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4">Анхаарах зүйлс</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <span>
                      Аяллын маршрут цаг агаараас хамаарч өөрчлөгдөж болно
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <span>
                      Гадаад паспортын хүчинтэй хугацаа 6 сараас багагүй байх
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">⚠️</span>
                    <span>Аялалд тохиромжтой хувцас, гутал авч явах</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Холбоо барих</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-600">📞</span>
                    <span>+976 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-600">📧</span>
                    <span>info@mongoltravel.mn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-600">📍</span>
                    <span>Улаанбаатар, Сүхбаатар дүүрэг</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Аялалд бэлэн үү?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Бидэнтэй холбогдож, өөрийн мөрөөдлийн аялалд гарах боломжтой.
            Дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнд хандаарай.
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Холбогдох
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelDetailModern;
