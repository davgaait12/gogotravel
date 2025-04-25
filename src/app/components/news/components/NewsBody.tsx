"use client";
import React, { useState } from "react";

interface CurrencyRate {
  currency: string;
  rate: number;
  lastUpdated: Date;
}

interface ChildTravelTip {
  title: string;
  description: string;
  icon: string;
}

interface TravelTip {
  category: string;
  tips: string[];
}

const NewsBody = () => {
  const [currencyRates] = useState<CurrencyRate[]>([
    { currency: "USD", rate: 3520, lastUpdated: new Date() },
    { currency: "EUR", rate: 3800, lastUpdated: new Date() },
    { currency: "JPY", rate: 22.5, lastUpdated: new Date() },
    { currency: "KRW", rate: 2.5, lastUpdated: new Date() },
    { currency: "CNY", rate: 471, lastUpdated: new Date() },
    { currency: "RUB", rate: 37, lastUpdated: new Date() },
  ]);

  const childTravelTips: ChildTravelTip[] = [
    {
      title: "Эрүүл мэндийн даатгал",
      description: "Хүүхдийн аяллын даатгал заавал авах шаардлагатай",
      icon: "🏥",
    },
    {
      title: "Эмийн жагсаалт",
      description:
        "Халуун бууруулах, хоолны хордлого, харшлын эм зэргийг авч явах",
      icon: "💊",
    },
    {
      title: "Баримт бичиг",
      description: "Гадаад паспорт, төрсний гэрчилгээ, зөвшөөрөл авах",
      icon: "📄",
    },
    {
      title: "Хоол тэжээл",
      description: "Хүүхдэд тохирсон хоол, ундаа, хөнгөн зууш бэлтгэх",
      icon: "🍱",
    },
    {
      title: "Тоглоом, зугаа цэнгэл",
      description: "Дуртай тоглоом, ном, таблет зэргийг авч явах",
      icon: "🎮",
    },
    {
      title: "Аюулгүй байдал",
      description: "Хүүхдийн гар хөлийн хяналт, GPS tracker ашиглах",
      icon: "🔒",
    },
  ];

  const travelTips: TravelTip[] = [
    {
      category: "Баримт бичиг",
      tips: [
        "Паспортын хүчинтэй хугацаа 6 сараас багагүй байх",
        "Визний шаардлага шалгах",
        "Гэр бүлийн гишүүдийн итгэмжлэл авах",
        "Даатгалын бичиг баримтаа хуулбарлаж авах",
      ],
    },
    {
      category: "Эрүүл мэнд",
      tips: [
        "Аялалын даатгал заавал авах",
        "Шаардлагатай вакцинуудыг хийлгэх",
        "Эмийн жагсаалт бэлтгэх",
        "Тухайн улсын эрүүл мэндийн байдлыг шалгах",
      ],
    },
    {
      category: "Санхүү",
      tips: [
        "Бэлэн мөнгө аваад явах",
        "Олон улсын картаа идэвхжүүлэх",
        "Валют солих газруудыг судлах",
        "Аяллын төсөв гаргах",
      ],
    },
    {
      category: "Аюулгүй байдал",
      tips: [
        "Элчин сайдын яамны дугаарыг авах",
        "Онцгой байдлын үед холбоо барих дугаарууд",
        "Хувийн мэдээллээ хамгаалах",
        "Гэр бүлтэйгээ тогтмол холбоотой байх",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Аялалын мэдээлэл
          </h1>
          <p className="text-xl opacity-90">
            Аялалд бэлтгэхэд шаардлагатай бүх мэдээлэл нэг дороос
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Валютын ханш */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">💰</span>
            Валютын ханш
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currencyRates.map((rate) => (
              <div
                key={rate.currency}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <h3 className="font-bold text-lg text-teal-600">
                  {rate.currency}
                </h3>
                <p className="text-2xl font-semibold mt-2">
                  {rate.rate.toLocaleString()} ₮
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Шинэчлэгдсэн: {rate.lastUpdated.toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Хүүхэдтэй аялах зөвлөгөө */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">👶</span>
            Хүүхэдтэй аялахад анхаарах зүйлс
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {childTravelTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{tip.icon}</span>
                  <h3 className="font-bold text-lg group-hover:text-teal-600 transition-colors">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ерөнхий зөвлөгөө */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            Ерөнхий зөвлөгөө
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelTips.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-bold text-xl text-teal-600 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Хамгийн чухал зөвлөгөө */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🌟 Хамгийн чухал зөвлөгөө</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Төлөвлөлт</h3>
              <p>
                Аялалаа эртнээс төлөвлөж, бэлтгэл сайтай хийснээр аюулгүй,
                таатай аялна
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Даатгал</h3>
              <p>
                Гадаад улсад аялахдаа заавал эрүүл мэндийн болон аяллын даатгал
                хийлгэх
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Холбоо барих</h3>
              <p>
                Гэр бүлтэйгээ тогтмол холбоотой байж, хаана явахаа мэдэгдэж байх
              </p>
            </div>
          </div>
        </section>

        {/* Footer with helpful links */}
        <footer className="mt-12 text-center text-gray-600">
          <p>© 2025 Аялалын мэдээлэл. Бүх эрх хуулиар хамгаалагдсан.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-teal-600 hover:underline">
              Элчин сайдын яам
            </a>
            <a href="#" className="text-teal-600 hover:underline">
              Гадаад харилцааны яам
            </a>
            <a href="#" className="text-teal-600 hover:underline">
              Нислэгийн цаг хуваарь
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewsBody;
