import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface Milestone {
  year: string;
  event: string;
  description: string;
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Батболд Д.",
      position: "Гүйцэтгэх захирал",
      image: "/api/placeholder/200/200",
      bio: "15 жилийн аялал жуулчлалын салбарын туршлагатай, олон улсын аялалын менежментийн мэргэжилтэй",
    },
    {
      name: "Сарангэрэл Ө.",
      position: "Маркетингийн менежер",
      image: "/api/placeholder/200/200",
      bio: "Дижитал маркетинг, брэнд менежментийн чиглэлээр 10 жил ажилласан туршлагатай",
    },
    {
      name: "Тэмүүлэн С.",
      position: "Аялалын зөвлөх",
      image: "/api/placeholder/200/200",
      bio: "8 жилийн аялал жуулчлалын туршлагатай, 30 гаруй улс оронд аялсан",
    },
    {
      name: "Номин-Эрдэнэ Б.",
      position: "Харилцагчийн үйлчилгээ",
      image: "/api/placeholder/200/200",
      bio: "Харилцааны менежмент, үйлчилгээний чанарын удирдлагын чиглэлээр мэргэшсэн",
    },
  ];

  const companyValues: CompanyValue[] = [
    {
      title: "Чанар",
      description:
        "Бид үйлчилгээнийхээ чанарыг хамгийн түрүүнд тавьж, харилцагчдынхаа хүлээлтээс давсан үйлчилгээ үзүүлдэг",
      icon: "✨",
    },
    {
      title: "Найдвартай байдал",
      description:
        "Харилцагчдынхаа өмнө хүлээсэн үүрэг хариуцлагаа чанд биелүүлж, найдвартай түнш байхыг эрхэмлэдэг",
      icon: "🤝",
    },
    {
      title: "Инноваци",
      description:
        "Аялал жуулчлалын салбарт шинэ технологи, инновацийг нэвтрүүлж, үйлчилгээгээ байнга сайжруулдаг",
      icon: "💡",
    },
    {
      title: "Мэргэжил дээд зэрэг",
      description:
        "Манай хамт олон бүгд өөрсдийн чиглэлээр мэргэшсэн, олон жилийн туршлагатай мэргэжилтнүүд",
      icon: "🎯",
    },
  ];

  const milestones: Milestone[] = [
    {
      year: "2015",
      event: "Компани байгуулагдсан",
      description:
        "Бид аялал жуулчлалын салбарт анхны алхмаа тавьж, жижиг оффистойгоор үйл ажиллагаагаа эхлүүлсэн",
    },
    {
      year: "2018",
      event: "Олон улсын түншлэл",
      description:
        "Ази, Европын 10 гаруй аялал жуулчлалын компанитай хамтран ажиллах гэрээ байгуулсан",
    },
    {
      year: "2020",
      event: "Дижитал шилжилт",
      description:
        "Цар тахлын хүнд үед дижитал платформ нээж, онлайнаар үйлчилгээ үзүүлж эхэлсэн",
    },
    {
      year: "2023",
      event: "Салбарын тэргүүлэгч",
      description:
        "Монголын шилдэг аялал жуулчлалын компаниар шалгарч, ISO 9001 стандарт авсан",
    },
    {
      year: "2025",
      event: "Шинэ үйлчилгээнүүд",
      description:
        "AI технологид суурилсан аялалын зөвлөх системийг нэвтрүүлж, үйлчилгээгээ өргөжүүлсэн",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Бидний тухай</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Бид 10 жилийн туршлагатайгаар харилцагчдадаа дэлхийн өнцөг булан
            бүрт аялах боломжийг олгож, мартагдашгүй дурсамжийг бүтээхэд нь
            тусалдаг.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Компанийн танилцуулга */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Бидний эрхэм зорилго
              </h2>
              <p className="text-gray-600 mb-4">
                Бид дэлхийн аялал жуулчлалын салбарт Монголыг төлөөлөн ажиллах,
                үйлчлүүлэгчдэдээ дэлхийн стандартын түвшинд үйлчилгээ үзүүлэх
                эрхэм зорилготой компани юм.
              </p>
              <p className="text-gray-600 mb-4">
                Манай баг хамт олон харилцагч бүрийн хэрэгцээ шаардлагад
                нийцсэн, санхүүгийн боломжид тохирсон аялалын төлөвлөгөө гаргаж,
                аяллын бүх үе шатанд мэргэжлийн дэмжлэг үзүүлдэг.
              </p>
              <p className="text-gray-600">
                Бид зөвхөн аялал зохион байгуулаад зогсохгүй, таны амьдралд үнэ
                цэнэтэй дурсамж, шинэ туршлага бий болгоход туслахыг эрмэлздэг.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Бидний баг"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Жилийн туршлага</div>
              </div>
            </div>
          </div>
        </section>

        {/* Компанийн үнэт зүйлс */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Бидний үнэт зүйлс
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Манай түүх */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Манай түүх
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[95px] top-[40px] bottom-[-32px] w-0.5 bg-teal-200"></div>
                )}

                <div className="flex-shrink-0 w-[100px]">
                  <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Манай баг */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Манай баг
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Статистик */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-12 text-white mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Аялагчид</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Улс орон</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Сэтгэл ханамж</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">Дэмжлэг</div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Бидэнтэй нэгдээрэй
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Хэрэв та аялал жуулчлалын салбарт ажиллах сонирхолтой, манай багт
            нэгдэхийг хүсвэл бидэнд хандаарай. Бид үргэлж шинэ авьяас чадвартай
            хүмүүсийг хайж байдаг.
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
            Ажлын байр
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
