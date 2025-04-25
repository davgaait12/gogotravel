"use client";
import React from "react";
import Image from "next/image";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  country: string;
  region: string;
  highlights: string[];
  included: string[];
}

const InternationalTravelPage = () => {
  const tours: Tour[] = [
    {
      id: 1,
      title: "Европын бүлэг аялал",
      description: "Франц, Итали, Герман, Чех улсуудаар аялах гайхалтай боломж",
      image: "/images/slide1.jpg",
      duration: "14 хоног",
      price: "5,500,000₮",
      country: "Европ",
      region: "Баруун Европ",
      highlights: [
        "Парисын Эйфелийн цамхаг",
        "Ромын Колизей",
        "Венецийн сувгууд",
        "Прагын цэнгэлдэх хүрээлэн",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "Өглөөний цай",
        "Музей, үзвэрийн тасалбар",
      ],
    },
    {
      id: 2,
      title: "Сингапур, Малайз аялал",
      description: "Зүүн өмнөд Азийн гайхамшигтай хотуудаар аялах",
      image: "/images/slide1.jpg",
      duration: "7 хоног",
      price: "2,800,000₮",
      country: "Ази",
      region: "Зүүн өмнөд Ази",
      highlights: [
        "Марина Бэй Сэндс",
        "Сентоса арал",
        "Петронас ихэр цамхаг",
        "Бату агуй",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "Хоол (2 удаа)",
        "Аялалын даатгал",
      ],
    },
    {
      id: 3,
      title: "Японы цэцэглэлт",
      description: "Сакурагийн цэцэглэлтийг үзэж, уламжлалт соёлтой танилцах",
      image: "/images/slide1.jpg",
      duration: "10 хоног",
      price: "3,800,000₮",
      country: "Япон",
      region: "Зүүн Ази",
      highlights: [
        "Токиогийн орчин үеийн хот",
        "Киотогийн эртний сүм хийдүүд",
        "Фүжи уул",
        "Осакагийн хоолны соёл",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "JR Pass (галт тэрэгний тасалбар)",
        "Хөтөч",
      ],
    },
    {
      id: 4,
      title: "АНУ-ын баруун эрэг",
      description: "Лос Анжелес, Сан Франциско, Лас Вегас хотуудаар аялах",
      image: "/images/slide1.jpg",
      duration: "10 хоног",
      price: "6,200,000₮",
      country: "АНУ",
      region: "Хойд Америк",
      highlights: [
        "Холливудын алдрын гудамж",
        "Алтан хаалга гүүр",
        "Лас Вегасын казиногууд",
        "Гранд Каньон",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "Машин түрээс",
        "Аялалын даатгал",
      ],
    },
    {
      id: 5,
      title: "Турк, Дубай аялал",
      description: "Эртний түүх, орчин үеийн хотын үзэмжийг нэг дор",
      image: "/images/slide1.jpg",
      duration: "8 хоног",
      price: "4,200,000₮",
      country: "Турк, Арабын Нэгдсэн Эмират",
      region: "Ойрх Дорнод",
      highlights: [
        "Стамбулын түүхэн дурсгалууд",
        "Каппадокиагийн агаарын бөмбөлөг",
        "Бурж Халифа",
        "Цөлийн сафари",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "Өглөөний цай",
        "Desert Safari тур",
      ],
    },
    {
      id: 6,
      title: "Египетийн соёл",
      description: "Пирамид, Сфинкс, Нил мөрний аялал",
      image: "/images/slide1.jpg",
      duration: "8 хоног",
      price: "3,500,000₮",
      country: "Египет",
      region: "Африк",
      highlights: [
        "Гизагийн пирамидууд",
        "Луксорын сүм",
        "Нил мөрний аялал",
        "Карнакийн сүм",
      ],
      included: [
        "Онгоцны тийз",
        "Зочид буудлын байр",
        "Нил мөрний аялал",
        "Музейн тасалбарууд",
      ],
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
          parseInt(a.price.replace(/[^0-9]/g, "")) -
          parseInt(b.price.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "price-desc")
        return (
          parseInt(b.price.replace(/[^0-9]/g, "")) -
          parseInt(a.price.replace(/[^0-9]/g, ""))
        );
      if (sortBy === "duration-asc")
        return parseInt(a.duration) - parseInt(b.duration);
      if (sortBy === "duration-desc")
        return parseInt(b.duration) - parseInt(a.duration);
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

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Онцлох:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Tour Info */}
                <div className="flex justify-between items-center mb-6">
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
                  <div className="text-teal-600 font-bold text-xl">
                    {tour.price}
                  </div>
                </div>

                <a
                  href="#"
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Дэлгэрэнгүй
                </a>
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
      {/* Contact Section */}
    </div>
  );
};

export default InternationalTravelPage;
