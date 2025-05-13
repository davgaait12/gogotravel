"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TourPrice {
  adult: string;
  child: string;
  child2?: string;
  infant?: string;
}

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: TourPrice;
  country: string;
  region: string;
  link: string;
  dailyImages?: { [key: string]: string }; // Өдөр бүрийн зургууд
}

const InternationalTravelPage = () => {
  const tours: Tour[] = [
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
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "Beijing-Universal-studio-tour",
    },

    {
      id: 2,
      title: "Газар нислэг хосолсон Шанхай Диснэйлэнд аялал",
      description:
        "Шанхай хотын алдарт эх газрын Диснэйлэндээр аялж, гайхамшигт цагийг өнгөрүүлээрэй",
      image: "/img/shd.jpg",
      duration: "8 шөнө 9 өдөр",
      price: {
        adult: "2,800,000₮",
        child: "2,100,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "Shanghai-Disneyland-combined-flight-and-land-trip",
    },
    {
      id: 3,
      title: "  Байгууллага, анги хамт олны аялал",
      description:
        "Өвөр монголын Жинин, Хөх хот, Мини Аватар паркын үзэсгэлэнт газруудаар аялаарай",
      image: "/img/miniavatarapark.jpg",
      duration: "6 шөнө 7 өдөр",
      price: {
        adult: "850,000₮",
        child: "700,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "Jinin-Blue-City-Mini-Avatar",
    },
    {
      id: 11,
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
      title: "3 хотын Датонг FANTA WILD- Мини Атавар",
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
    {
      id: 6,
      title: "Токио фүжи аялал",
      description:
        "Японы нийслэл Токио, Фүжи уулын  халуун рашаан, аутлетээр аялаарай",
      image: "/img/tokyo.jpg",
      duration: "4 шөнө 5 өдөр",
      price: {
        adult: "2,800,000₮ + Тийз",
        child: "2,600,000₮ + Тийз",
      },
      country: "Япон",
      region: "Зүүн Ази",
      link: "tokyo",
      dailyImages: {
        main: "Mount Fuji cherry blossoms pagoda",
        day1: "Tokyo arrival Narita airport",
        day2: "Shibuya crossing Tokyo",
        day3: "Mount Fuji Yamanaka Lake",
        day4: "Asakusa Sensoji Temple Tokyo",
        day5: "Tokyo Duty Free shopping",
      },
    },
    {
      id: 7,
      title: "Улаанбаатар - Ордос Тэнгэрийн хаалга Аватар",
      description:
        "Ордос, Жанжиажэ, Тэнгэрийн хаалга, шилэн гүүр, Аватар уулс зэрэг үзэсгэлэнт газруудаар аялаарай",
      image: "/img/zhangjiajie-avatar.jpg",
      duration: "7 шөнө 8 өдөр",
      price: {
        adult: "2,650,000₮",
        child: "2,400,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "ULAANBAATAR-ORDOSSKYGATEAVATAR",
    },
    {
      id: 8,
      title: "Анталяа-Памукалле-Стамбул",
      description:
        "Турк улсын үзэсгэлэнт Анталья, Памукалле, Стамбул хотуудаар аялж, Турк соёлтой танилцана",
      image: "/img/antalya.jpg",
      duration: "7 шөнө 8 өдөр",
      price: {
        adult: "4,900,000₮",
        child: "3,850,000₮",
      },
      country: "Турк",
      region: "Өрнөд Ази",
      link: "antalya",
    },
    {
      id: 9,
      title: "ЖАНЖИАЖЭ-БЭЭЖИН АЯЛАЛ",
      description:
        "'Аватар' киноны газар, Баофэн нуур, Тианзи уул, дэлхийн хамгийн урт шилэн гүүрээр аялна",
      image: "/img/b.jpg",
      duration: "8 өдөр 7 шөнө",
      price: {
        adult: "2,650,000₮",
        child: "2,390,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "jabejing",
      dailyImages: {
        main: "Zhangjiajie Avatar mountains morning mist",
        day1: "Zhangjiajie arrival Baofeng Lake",
        day2: "Tianmen Mountain Heaven's Gate cable car",
        day3: "Zhangjiajie Avatar mountains forests",
        day4: "Zhangjiajie Shili Gallery",
        day5: "Zhangjiajie Glass Bridge",
        day6: "Yellow Dragon Cave Zhangjiajie",
        day7: "Beijing Forbidden City",
        day8: "Beijing to Ulaanbaatar flight",
      },
    },
    {
      id: 10,
      title: "Улаанбаатар - Ордос - Хайнан Аялал",
      description:
        "Хайнаны Атлантис усан парк, далайн эрэг, Саньяа хот, Ордосын Чингисийн онгоноор аялна",
      image: "/img/hainan.jpg",
      duration: "7 шөнө 8 өдөр",
      price: {
        adult: "3,100,000₮",
        child: "2,750,000₮",
        child2: "2,550,000₮",
        infant: "650,000₮",
      },
      country: "БНХАУ",
      region: "Зүүн Ази",
      link: "hainan",
      dailyImages: {
        main: "Sanya Hainan beach aerial view",
        day1: "Ordos to Hainan flight",
        day2: "Sanya yacht cruise",
        day3: "Atlantis Aquaventure Hainan",
        day4: "Sanya beach resort relaxation",
        day5: "Sanya beach resort relaxation",
        day6: "Sanya to Ordos flight",
        day7: "Ordos Genghis Khan Mausoleum",
        day8: "Ordos to Ulaanbaatar flight",
      },
    },
  ];

  const regions = ["Бүгд", "Европ", "Ази", "Америк", "Африк", "Ойрх Дорнод"];
  const [selectedRegion, setSelectedRegion] = React.useState("Бүгд");
  const [sortBy, setSortBy] = React.useState("default");

  const filteredTours = tours
    .filter(
      (tour) =>
        selectedRegion === "Бүгд" || tour.region.includes(selectedRegion)
    )
    .sort((a, b) => {
      if (sortBy === "price-asc")
        return (
          parseInt(a.price.adult.replace(/[^0-9]/g, "")) -
          parseInt(b.price.adult.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "price-desc")
        return (
          parseInt(b.price.adult.replace(/[^0-9]/g, "")) -
          parseInt(a.price.adult.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "duration-asc") {
        // Хугацааг тоо болгох
        const getDurationDays = (duration: string) => {
          const match = duration.match(/(\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getDurationDays(a.duration) - getDurationDays(b.duration);
      }
      if (sortBy === "duration-desc") {
        const getDurationDays = (duration: string) => {
          const match = duration.match(/(\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getDurationDays(b.duration) - getDurationDays(a.duration);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Гадаад аялал
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Дэлхийн өнцөг булан бүрийг танилцаж, соёл иргэншлийн өв уламжлалыг
              мэдрээрэй
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedRegion === region
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="default">Эрэмбэлэх</option>
              <option value="price-asc">Үнэ: Бага → Их</option>
              <option value="price-desc">Үнэ: Их → Бага</option>
              <option value="duration-asc">Хугацаа: Богино → Урт</option>
              <option value="duration-desc">Хугацаа: Урт → Богино</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <div className="relative w-full h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.country}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>

                {/* Tour Info */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    <span>{tour.duration}</span>
                  </div>
                </div>

                {/* Price Info */}
                <div className="flex flex-col mb-6">
                  <div className="text-teal-600 font-bold text-xl mb-1">
                    Том хүн: {tour.price.adult}
                  </div>
                  <div className="text-teal-600 font-medium">
                    Хүүхэд: {tour.price.child}
                  </div>
                  {tour.price.child2 && (
                    <div className="text-teal-600 font-medium">
                      Хүүхэд 2: {tour.price.child2}
                    </div>
                  )}
                  {tour.price.infant && (
                    <div className="text-teal-600 font-medium">
                      Нярай: {tour.price.infant}
                    </div>
                  )}
                </div>

                <Link
                  href={tour.link}
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Дэлгэрэнгүй
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Яагаад биднийг сонгох вэ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Цаг хугацааны менежмент
              </h3>
              <p className="text-gray-600">
                Аялалын төлөвлөгөөг цаг алдалгүй зохион байгуулна
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Найдвартай байдал</h3>
              <p className="text-gray-600">
                Аюулгүй, баталгаатай аялалыг санал болгоно
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Мэргэжлийн хөтөч</h3>
              <p className="text-gray-600">
                Туршлагатай, мэргэжлийн хөтөч нартай хамтарна
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTravelPage;
