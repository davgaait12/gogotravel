import React from "react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

interface PartnersProps {
  title?: string;
  partners?: Partner[];
}

const Partner: React.FC<PartnersProps> = ({
  title = "Хамтрагч байгууллагууд",
  partners = [
    {
      id: 1,
      name: "МИАТ",
      logo: "/img/miat.jpg", // Локал зураг
      website: "https://www.miat.com",
    },
    {
      id: 2,
      name: "Хүннү Эйр",
      logo: "/img/hunnu.jpg", // Локал зураг
      website: "https://www.hunnuair.com",
    },
    {
      id: 3,
      name: "Номин Даатгал",
      logo: "/img/nomim.webp", // Локал зураг
      website: "https://www.nomindaatgal.mn",
    },
    {
      id: 4,
      name: "TravelSim",
      logo: "/img/images.png", // Локал зураг
      website: "https://www.travelsim.com",
    },
  ],
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title with decorative line */}
        <div className="relative text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block px-8 bg-white relative z-10">
            {title}
          </h2>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-teal-600 transform -translate-y-1/2" />
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center"
            >
              {partner.website ? (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-full"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-20 flex items-center justify-center w-full relative">
                      <div className="relative w-full h-16">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </a>
              ) : (
                <div className="p-6 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-20 flex items-center justify-center w-full relative">
                      <div className="relative w-full h-16">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain opacity-80"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {partner.name}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative pattern */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-16 h-1 bg-teal-600 rounded-full" />
            <div className="w-3 h-3 bg-teal-600 rounded-full" />
            <div className="w-16 h-1 bg-teal-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
