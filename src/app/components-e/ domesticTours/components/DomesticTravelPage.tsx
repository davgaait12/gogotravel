"use client";
import React from "react";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  region: string;
  season: string;
  difficulty: string;
  highlights: string[];
  included: string[];
}

const DomesticTravelPage = () => {
  const tours: Tour[] = [
    {
      id: 1,
      title: "Говь-Алтай аймгийн аялал",
      description: "Говийн гайхамшигт байгаль, түүх соёлтой танилцах аялал",
      image:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1600",
      duration: "5 хоног",
      price: "450,000₮",
      region: "Говь-Алтай",
      season: "Зун",
      difficulty: "Дунд",
      highlights: [
        "Хонгорын элс",
        "Ёлын ам",
        "Баянзаг",
        "Говийн гурван сайхан уул",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Зочид буудал/Гэр буудал",
        "Хоол (3 удаа)",
        "Хөтөч, орчуулагч",
      ],
    },
    {
      id: 2,
      title: "Хөвсгөл нуурын аялал",
      description: "Монголын далай гэгддэг Хөвсгөл нуурын эрэг дагуух аялал",
      image:
        "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=80&w=1600",
      duration: "7 хоног",
      price: "650,000₮",
      region: "Хөвсгөл",
      season: "Зун",
      difficulty: "Хялбар",
      highlights: [
        "Хөвсгөл нуур",
        "Цаатан айл",
        "Морин аялал",
        "Хатгал тосгон",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Гэр буудал",
        "Хоол (3 удаа)",
        "Завины аялал",
      ],
    },
    {
      id: 3,
      title: "Хархорин, Өгий нуур",
      description: "Эртний нийслэл Хархорин, Өгий нуурын байгалийн үзэсгэлэн",
      image:
        "https://images.unsplash.com/photo-1569555006762-9d3f44e6d2d0?auto=format&fit=crop&q=80&w=1600",
      duration: "3 хоног",
      price: "350,000₮",
      region: "Өвөрхангай",
      season: "Бүх улирал",
      difficulty: "Хялбар",
      highlights: [
        "Эрдэнэ зуу хийд",
        "Хархорумын музей",
        "Өгий нуур",
        "Орхоны хөндий",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Зочид буудал",
        "Хоол (2 удаа)",
        "Музейн тасалбар",
      ],
    },
    {
      id: 4,
      title: "Тэрэлж, Горхи-Тэрэлж",
      description: "Улаанбаатарын ойролцоох байгалийн цогцолборт газар",
      image:
        "https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?auto=format&fit=crop&q=80&w=1600",
      duration: "2 хоног",
      price: "250,000₮",
      region: "Төв аймаг",
      season: "Бүх улирал",
      difficulty: "Хялбар",
      highlights: [
        "Яст мэлхий хад",
        "Арьяабал бурхан",
        "Морин аялал",
        "Тэрэлжийн голууд",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Амралтын газар",
        "Хоол (2 удаа)",
        "Морь унах үйлчилгээ",
      ],
    },
    {
      id: 5,
      title: "Алтай таван богд",
      description: "Монголын хамгийн өндөр уулсаар аялах",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600",
      duration: "10 хоног",
      price: "900,000₮",
      region: "Баян-Өлгий",
      season: "Зун",
      difficulty: "Хүнд",
      highlights: [
        "Хүйтэн оргил (4374м)",
        "Потанины мөсөн гол",
        "Казах ястан",
        "Таван богдын нуурууд",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Майхан",
        "Хоол (3 удаа)",
        "Авиралтын тоног төхөөрөмж",
      ],
    },
    {
      id: 6,
      title: "Хустайн байгалийн цогцолборт газар",
      description: "Тахь адууг байгалийн дунд үзэх аялал",
      image:
        "https://images.unsplash.com/photo-1606057597211-9e7e8a7e1d7f?auto=format&fit=crop&q=80&w=1600",
      duration: "1 хоног",
      price: "150,000₮",
      region: "Төв аймаг",
      season: "Бүх улирал",
      difficulty: "Маш хялбар",
      highlights: [
        "Тахь адуу үзэх",
        "Хустайн музей",
        "Байгалийн тайлбарлагч",
        "Зэрлэг амьтад ажиглах",
      ],
      included: [
        "Тээврийн хэрэгсэл",
        "Өдрийн хоол",
        "Хөтөч",
        "Музейн тасалбар",
      ],
    },
  ];

  const regions = ["All", "Gobi", "Khuvsgul", "Central", "West", "East"];
  const seasons = ["All Seasons", "Summer", "Winter", "Spring", "Autumn"];

  const [selectedRegion, setSelectedRegion] = React.useState("All");
  const [selectedSeason, setSelectedSeason] = React.useState("All Seasons");
  const [sortBy, setSortBy] = React.useState("default");

  const filteredTours = tours
    .filter((tour) => {
      return (
        (selectedRegion === "All" || tour.region.includes(selectedRegion)) &&
        (selectedSeason === "All Seasons" || tour.season === selectedSeason)
      );
    })
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
            "url('https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Domestic travel
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A journey to discover the beautiful nature and cultural traditions
              of Mongolia
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
            <div className="flex gap-2">
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="default">Sort</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="duration-asc">Duration: Short → Long</option>
                <option value="duration-desc">Duration: Long → Short</option>
              </select>
            </div>
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
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.region}
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
                  More details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why choose us?
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
              <h3 className="text-xl font-semibold mb-2">Time management</h3>
              <p className="text-gray-600">Organize travel plans promptly</p>
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
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Offer a safe and secure trip</p>
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
              <h3 className="text-xl font-semibold mb-2">Professional guide</h3>
              <p className="text-gray-600">
                Work with experienced and professional guides
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
    </div>
  );
};

export default DomesticTravelPage;
