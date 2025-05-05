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
  notes?: string[];
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
    title: "Анталяа-Памукалле-Стамбул",
    subtitle: "7 шөнө / 8 өдөр",
    mainImage: "/img/antalya.jpg",
    duration: "7 шөнө / 8 өдөр",
    price: {
      adult: "4,900,000₮",
      child: "3,850,000₮",
    },
    groupSize: "4-12 хүн",
    difficulty: "Хөнгөн",
    description:
      "Турк улсын үзэсгэлэнт Анталья, Памукалле, Стамбул хотуудаар аялж, Турк соёл, архитектур, түүхийг мэдрэх боломжтой. Халуун рашаан, үзэсгэлэнт далайн эрэг, түүхэн дурсгалт газрууд, хуучин хотын талбай, Хагиа Софиа, Босфорын хоолой зэрэг газруудаар аялна.",

    highlights: [
      {
        name: "Анталья хотын Old Town",
        icon: "🏛️",
      },
      {
        name: "Памуккале халуун рашаан",
        icon: "♨️",
      },
      {
        name: "Цасан цагаан хөвөн уул",
        icon: "⛰️",
      },
      {
        name: "Хиараполис болон Анфитеатр",
        icon: "🏛️",
      },
      {
        name: "Босфорын хоолойгоор аялах",
        icon: "🚢",
      },
      {
        name: "Хагиа Софиа",
        icon: "🕌",
      },
      {
        name: "Султан Ахметийн сүм",
        icon: "🕌",
      },
      {
        name: "5 одтой зочид буудалд байрлах",
        icon: "🏨",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Өдөр 1 - Улаанбаатар-Стамбул-Анталья",
        activities: [
          {
            name: "Улаанбаатар хотоос МИАТ-ийн нислэгээр Истанбул хотоор дамжин Анталья руу нисэх",
            icon: "✈️",
          },
          {
            name: "Антальяд буусны дараа аяллын хөтөч тайлбарлагчтайгаа уулзах",
            icon: "🧑‍🦱",
          },
          {
            name: "Зочид буудалдаа очин бүртгэл хийлгэн амрах",
            icon: "🏨",
          },
        ],
        image: "/img/antalya1.jpg",
        accommodation: "Marvida family resort",
        meals: ["Аялагч хувьдаа"],
      },
      {
        day: 2,
        title: "Өдөр 2 - Анталья хотын аялал",
        activities: [
          {
            name: "Өглөөний цайны дараа тогтсон цагт цугларах",
            icon: "☕",
          },
          {
            name: "Султанит чулууг шигтгэн урласан алт мөнгөний эдлэлийн үнэт эдлэлийн дэлгүүрээр зочлох",
            icon: "💎",
          },
          {
            name: "Алдарт зоогтой орон нутгийн ресторанд өдрийн хоол зооглох",
            icon: "🍽️",
          },
          {
            name: "Old town city буюу хуучин хотоор аялах",
            icon: "🏛️",
          },
          {
            name: "Анталья хотын хамгийн үзэсгэлэнтэй газраар тооцогддог төв талбайг үзэх",
            icon: "🏞️",
          },
          {
            name: "Оройн хоолоо буудалдаа ирж зооглон амрах",
            icon: "🍽️",
          },
        ],
        image: "/img/antalya2.jpg",
        accommodation: "Marvida family resort",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 3,
        title: "Өдөр 3 - Чөлөөт өдөр",
        activities: [
          {
            name: "Чөлөөт өдөр",
            icon: "🏖️",
          },
          {
            name: "Нэмэлт аялалын хөтөлбөр авах боломжтой",
            icon: "🎫",
          },
          {
            name: "Land of Legends аялалд оролцож, усан парк, үзвэр дэлгүүр хэсэх боломжтой",
            icon: "🎢",
          },
        ],
        image: "/img/antalya3.jpg",
        accommodation: "Marvida family resort",
        meals: ["Өглөөний цай", "Оройн хоол"],
        notes: ["Land of Legends нэмэлт төлбөртэй"],
      },
      {
        day: 4,
        title: "Өдөр 4 - Анталья-Памуккалле",
        activities: [
          {
            name: "Анталья-Памуккале руу хөдлөх",
            icon: "🚌",
          },
          {
            name: "Өдрийн хоолоо замдаа тухайн нутгийн зоогийн газарт зооглох",
            icon: "🍽️",
          },
          {
            name: "Хөвөн даавуун эдлэлийн дэлгүүрээр зочлох",
            icon: "🧵",
          },
          {
            name: "Хөвөнгийн тариалалтаараа алдартай бөгөөд бэлэн хувцас, хөвөн дэр хөнжил, алчуур зэргийг худалдан авах боломжтой",
            icon: "🛍️",
          },
          {
            name: "Памуккале халуун рашаан амралтын бүст очин ядаргаагаа тайлах",
            icon: "♨️",
          },
        ],
        image: "/img/antalya.jpg",
        accommodation: "Adempira Termal & Spa Hotel",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 5,
        title: "Өдөр 5 - Памуккале-Стамбул",
        activities: [
          {
            name: "Агаарын бөмбөлөгийн хөтөлбөрт хамрагдах боломжтой (нэмэлт төлбөртэй)",
            icon: "🎈",
          },
          {
            name: "Өглөөний цайгаа уусны дараа тогтсон цагт цуглараад Памуккале хотын аяллын эхний үзвэр цасан цагаан хөвөн уулыг очиж үзэх",
            icon: "⛰️",
          },
          {
            name: "Дэлхийн соёлын өвд 1988 онд бүртгэгдсэн Хиараполис болон Анфитеатрыг үзэх",
            icon: "🏛️",
          },
          {
            name: "Өдрийн хоолоо нутгийн буффет ресторанд зооглох",
            icon: "🍽️",
          },
          {
            name: "Памуккале хотын эрийн хуудас болсон анар жимсний талбайд байрлах дарсны үйлдвэрт амталгаа хийж, виноны худалдан авалт хийх боломжтой",
            icon: "🍷",
          },
          {
            name: "Оройн хоолоо идээд Денизли хотын онгоцны буудал руу хөдөлж Стамбул хотыг зорин нисэх",
            icon: "✈️",
          },
          {
            name: "Стамбул хотын зочид буудалдаа хүргүүлэх",
            icon: "🏨",
          },
        ],
        image: "/img/antalya5.jpg",
        accommodation: "Стамбул хотын зочид буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 6,
        title: "Өдөр 6 - Стамбул хот",
        activities: [
          {
            name: "Өглөөний цайны дараа Ази, Европыг холбосон Босфорын хоолойгоор усан онгоцоор аялах",
            icon: "🚢",
          },
          {
            name: "Истанбулын алдарт 537 онд баригдсан Хагиа софия сүмээр зочлох",
            icon: "🕌",
          },
          {
            name: "1616 онд баригдсан Султан ахметийн сүмээр зочлох",
            icon: "🕌",
          },
          {
            name: "Өдрийн хоол нутгийн ресторанд идэх",
            icon: "🍽️",
          },
          {
            name: "Буудалдаа очиж амрах",
            icon: "🏨",
          },
        ],
        image: "/img/antalya6.jpg",
        accommodation: "Стамбул хотын зочид буудал",
        meals: ["Өглөөний цай", "Өдрийн хоол"],
      },
      {
        day: 7,
        title: "Өдөр 7 - Чөлөөт өдөр",
        activities: [
          {
            name: "Чөлөөт өдөр бөгөөд аялагчид өөрсдийн сонирхлоор өнгөрүүлэх",
            icon: "🏙️",
          },
          {
            name: "Хотын аялал хийх боломжтой",
            icon: "🚶",
          },
          {
            name: "Истанбул хотын алдартай их дэлгүүр Молл-с шоппинг хийх боломжтой",
            icon: "🛍️",
          },
        ],
        image: "/img/antalya7.webp",
        accommodation: "Стамбул хотын зочид буудал",
        meals: ["Өглөөний цай"],
      },
      {
        day: 8,
        title: "Өдөр 8 - Стамбул-Улаанбаатар",
        activities: [
          {
            name: "Өглөөний цайны дараа буудлаа хүлээлгэж өгөх",
            icon: "☕",
          },
          {
            name: "Стамбул хотын онгоцны буудалруу хөдлөх",
            icon: "🚕",
          },
          {
            name: "Нисэх буудал дээр хүрэлцэн ирж Улаанбаатар хотын зүг нисэх",
            icon: "✈️",
          },
        ],
        image: "/img/ub.jpg",
        accommodation: "Аялал төгсөв",
        meals: ["Өглөөний цай"],
      },
    ],

    included: [
      "Анталия-Памуккале-Стамбул 3 хотын нислэгийн тасалбар",
      "5 одтой зочид буудал",
      "Мэргэжлийн карттай хөтөч",
      "Хөтөлбөрт заасан үзвэр үйлчилгээ, хоол, уух зүйлс",
      "Автобусны үйлчилгээ",
      "Гадаадад зорчигчидын гэнэтийн ослын даатгал",
    ],

    notIncluded: [
      "Зочид буудалд ганцаараа орвол нэмэлт төлбөр",
      "Гадуур ресторан дахь бүх уух зүйлс",
      "Нутгийн хөтөч, жолоочид гар цайлах мөнгө",
      "Нэмэлт үзвэрүүдийн төлбөр (Агаарын бөмбөлөг, Land of Legends аялал г.м)",
    ],

    notes: [
      "Том хүний үнэ: 4,900,000₮",
      "Хүүхдийн үнэ: 3,850,000₮",
      "Виз шаардлагатай",
      "Паспортын хүчинтэй хугацаа 6 сараас дээш байх",
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

                <div className="grid grid-cols-2 gap-6 mb-6">
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

                {tourData.itinerary[activeDay - 1].notes && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span>ℹ️</span>
                      Нэмэлт мэдээлэл
                    </h4>
                    <ul className="space-y-2">
                      {tourData.itinerary[activeDay - 1].notes?.map(
                        (note, index) => (
                          <li key={index} className="text-gray-700">
                            {note}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
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
