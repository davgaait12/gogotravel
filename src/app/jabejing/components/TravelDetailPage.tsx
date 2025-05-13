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
    title: "ЖАНЖИАЖЭ-БЭЭЖИН АЯЛАЛ",
    subtitle: "8 өдөр / 7 шөнө",
    mainImage: "/img/b.jpg",
    duration: "8 өдөр / 7 шөнө",
    price: {
      adult: "2,650,000₮",
      child: "2,390,000₮",
    },
    groupSize: "4-12 хүн",
    difficulty: "Дунд зэрэг",
    description:
      "ЖАНЖИАЖЭ-БЭЭЖИН аялалд хамрагдаж, байгалийн үзэсгэлэнт газар болох 'Аватар' киноны зураг авалтын газар, Баофэн нуур, Тианзи ууланд зочилж, дэлхийн хамгийн урт шилэн гүүр, Бээжин хотын шилдэг газруудаар аялна. Энэ аялал нь Хятадын байгаль, соёлтой танилцах онцгой боломж юм.",

    highlights: [
      {
        name: "Баофэн нуур",
        icon: "🏞️",
      },
      {
        name: "Тэнгэрийн хаалга байгалийн цогцолбор",
        icon: "🏔️",
      },
      {
        name: "Аватар киноны зураг авалтын газар",
        icon: "🎬",
      },
      {
        name: "Дэлхийн хамгийн урт агаарын дүүжин зам",
        icon: "🚡",
      },
      {
        name: "Тианзи уул",
        icon: "⛰️",
      },
      {
        name: "Алтан ташуур (Shili Gallery)",
        icon: "🏞️",
      },
      {
        name: "Дэлхийн хамгийн урт шилэн гүүр",
        icon: "🌉",
      },
      {
        name: "Шар луугийн агуй",
        icon: "🐉",
      },
      {
        name: "Бээжин хот",
        icon: "🏙️",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Өдөр 1 - Улаанбаатар-Жанжиажэ",
        activities: [
          {
            name: "Өглөө 8 цагт Хөшигтийн хөндий дэхь Чингис хаан онгоцны буудалд цуглах",
            icon: "⏰",
          },
          {
            name: "10:10 минутын УБ-Жанжиажэ чиглэлийн нислэгээр нисэх",
            icon: "✈️",
          },
          {
            name: "Хил гаалиар нэвтрэх",
            icon: "🛂",
          },
          {
            name: "Байгалийн өв гэж алдаршсан 'Баофэн' нуурд очих",
            icon: "🏞️",
          },
          {
            name: "Карстын өндөр оргилууд, ногоон байгууламжаар хүрээлэгдсэн үзэсгэлэнт газруудаар аялах",
            icon: "🌄",
          },
          {
            name: "'Дарь эх', 'Сарыг хазаж буй алтан бах' зэрэг өвөрмөц чулуун тогтоцтой байгалийн үзэсгэлэнт газруудыг үзэх",
            icon: "🗿",
          },
        ],
        image: "/img/b1.jpg",
        accommodation: "Laurel house hotel",
        meals: ["Оройн хоол"],
      },
      {
        day: 2,
        title: "Өдөр 2 - Тэнгэрийн хаалга байгалийн үзэсгэлэнт цогцолбор",
        activities: [
          {
            name: "Өглөөний цайны дараа Хятадын уламжлалт анагаах ухааны клиниктай танилцах",
            icon: "💊",
          },
          {
            name: "7455 м урт агаарын дүүжин замаар далайн түвшнөөс 1358м өндөртэй 'Дэлхийн хамгийн урт зорчигч тээврийн зам'-аар дээшилж өгсөх",
            icon: "🚡",
          },
          {
            name: "Байгалийн гайхамшигтай үзэмжийг сонирхох",
            icon: "🏔️",
          },
        ],
        image: "/img/b2.jpg",
        accommodation: "Laurel house hotel",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
        notes: [
          "Санал болгох нэмэлт хөтөлбөр: Тианмэний үнэгт дагина үзүүлбэр 300 юань/хүн",
        ],
      },
      {
        day: 3,
        title: "Өдөр 3 - Үндэсний ойн цэцэрлэгт хүрээлэн-Аватар-Тианзи уул",
        activities: [
          {
            name: "Өглөөний цайны дараа 08:00 цагт цайны ордоноор зочлох",
            icon: "☕",
          },
          {
            name: "Хятадын анхны үндэсний ойн цэцэрлэгт хүрээлэн үзэх",
            icon: "🌲",
          },
          {
            name: "Дэлхийн анхны уул өөд гарах Байлун цахилгаан шатаар дээш өгсөх",
            icon: "⚡",
          },
          {
            name: "'Аватар' киноны зураг авалтыг хийсэн ууланд очих",
            icon: "🎬",
          },
          {
            name: "Аватар кинонд бүтээсэн Пандора гаригийг нүдээрээ үзэх",
            icon: "🌄",
          },
          {
            name: "Байгальд ээлтэй эко машинаар Тианзи цогцолбор газраар зугаалах",
            icon: "🚐",
          },
        ],
        image: "/img/b3.jpg",
        accommodation: "Laurel house hotel",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 4,
        title: "Өдөр 4 - Алтан ташуур Shili Gallery",
        activities: [
          {
            name: "Тэн-миль галерей (Shili Gallery) үзэх",
            icon: "🏞️",
          },
          {
            name: "Өвөрмөц чулуун хадны үзүүр, ногоон байгальтай уулс, гайхамшигт байгалийн үзэмжээрээ алдартай газруудыг үзэх",
            icon: "🌄",
          },
          {
            name: "Ойролцоогоор 7.5 км урттай галерейгаар аялах",
            icon: "🚶",
          },
          {
            name: "ЮНЕСКО-гийн Дэлхийн өвийн жагсаалтад багтсан Жанжиажие уулсын байгалийн цогцолборт газраар зугаалах",
            icon: "🌏",
          },
        ],
        image: "/img/b4.jpg",
        accommodation: "Laurel house hotel",
        meals: ["Өглөөний цай", "Өдрийн хоол", "Оройн хоол"],
      },
      {
        day: 5,
        title: "Өдөр 5 - Нэмэлт хөтөлбөр",
        activities: [
          {
            name: "Чөлөөт өдөр буюу нэмэлт хөтөлбөр авах боломжтой (Шилэн гүүр + Zipline + VR + Slide - 500 юань/хүн)",
            icon: "🎟️",
          },
          {
            name: "Дэлхийн хамгийн урт шилэн гүүрээр аялах",
            icon: "🌉",
          },
          {
            name: "Гранд хавцлын үзэсгэлэнт газрын бүсэд байдаг шилэн гүүр үзэх (400 метрийн өндөр, 370 метрийн урттай)",
            icon: "🏞️",
          },
          {
            name: "Дэлхийн хамгийн өндөр чөлөөт үсрэлтийн тавцан үзэх",
            icon: "🪂",
          },
        ],
        image: "/img/b5.jpg",
        accommodation: "Laurel house hotel",
        meals: ["Өглөөний цай", "Оройн хоол"],
        notes: [
          "Нэмэлт хөтөлбөр: Шилэн гүүр + Zipline + VR + Slide - 500 юань/хүн",
        ],
      },
      {
        day: 6,
        title: "Өдөр 6 - Жанжиажэ-Бээжин",
        activities: [
          {
            name: "Шар луугийн агуйг үзэх",
            icon: "🐉",
          },
          {
            name: "Орой 21:35 цагт унтлагын вагоноор Бээжин хотын зүг хөдлөх (18 цаг 20 минут явна)",
            icon: "🚂",
          },
        ],
        image: "/img/b0.jpg",
        accommodation: "Унтлагын вагон",
        meals: ["Өглөөний цай"],
      },
      {
        day: 7,
        title: "Өдөр 7 - Бээжин",
        activities: [
          {
            name: "Үдээс өмнө 15:55 минутад Бээжин хотод ирэх",
            icon: "🚂",
          },
          {
            name: "Буудалдаа байрлаж амрах",
            icon: "🏨",
          },
          {
            name: "Орой чөлөөт хөтөлбөр",
            icon: "🌆",
          },
        ],
        image: "/img/b9.jpg",
        accommodation: "Бээжин хотын буудал",
        meals: ["Өглөөний цай"],
      },
      {
        day: 8,
        title: "Өдөр 8 - Бээжин-Улаанбаатар",
        activities: [
          {
            name: "Чөлөөт өдөр - Бээжин хотоор зугаалах",
            icon: "🏙️",
          },
          {
            name: "Нислэг: 23:15-01:45",
            icon: "✈️",
          },
          {
            name: "Улаанбаатар хот руу буцах",
            icon: "🏠",
          },
        ],
        image: "/img/ub.jpg",
        accommodation: "Аялал төгсөв",
        meals: ["Өглөөний цай"],
      },
    ],

    included: [
      "УБ-Жанжиажэ-УБ ирж очих нислэгийн тийз",
      "Хөтөлбөрт заагдсан зочид буудалын төлбөр",
      "Хөтөлбөрт заагдсан аяллын үзвэр үйлчилгээний төлбөр",
      "Аяллын тээврийн зардал",
      "Хөтөлбөрт заагдсан өглөөний цай, өдрийн хоол, оройн хоол",
      "Мэргэжлийн туршлагатай хөтөч (Хятад, Монгол хэлтэй)",
      "Гадаад аяллын даатгал (БНХАУ-ын талдаа даатгал хийгдэнэ)",
      "Стандарт 2 ортой өрөө ",
    ],

    notIncluded: [
      "Аялагчийн хувийн хэрэглээний зардал",
      "Чөлөөт өдрийн хоол, унаа, хөтчийн зардал",
      "Хөтөлбөрт заагдаагүй үзвэр үйлчилгээг нэмэлтээр авах тохиолдолд түүний төлбөр (Жишээ нь: Шилэн гүүр тур - 500 юань/хүн)",
      "Хөтөч жолоочид өгөх гарын мөнгө буюу TIP (заавал өгөх зүйл биш)",
      "Хөтөлбөрт заагдаагүй өглөө, оройн хоол",
    ],

    notes: [
      "Том хүний үнэ: 2,650,000₮",
      "Хүүхэд: 12 нас хүртэлх 2,390,000₮",
      "0-2 нас үнэгүй",
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
                    <span className="w-6 h-6 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full font-bold">
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
