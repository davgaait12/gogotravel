import React from "react";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface SocialMedia {
  facebook: string;
  wechat: string;
  instagram: string;
}

interface FooterProps {
  contactInfo?: ContactInfo;
  socialMedia?: SocialMedia;
  navigationLinks?: string[];
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
  contactInfo = {
    address:
      "Улаанбаатар хот, Сүхбаатарын талбайн зүүн талд Цагаан лав 622 тоот",
    phone: "+976 80113295",
    email: "gogotravel.agency5@gmail.com",
  },
  socialMedia = {
    facebook: "go-go travel",
    wechat: "dukaa (go-go travel)",
    instagram: "gogo_travel_agency",
  },
  navigationLinks = ["Гадаад Аялал", "Дотоод Аялал", "Мэдээлэл"],
  copyright = "© 2025 GoGo Travel. Бүх эрх хуулиар хамгаалагдсан.",
}) => {
  return (
    <footer className="bg-gradient-to-br from-teal-900 to-teal-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Холбоо барих
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center mr-4 group-hover:bg-teal-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="pt-2 text-gray-300 hover:text-white transition-colors">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center mr-4 group-hover:bg-teal-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center mr-4 group-hover:bg-teal-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Нийгмийн сүлжээ
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <a
                  href={`https://facebook.com/${socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {socialMedia.facebook}
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <span className="text-gray-300">{socialMedia.wechat}</span>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <a
                  href={`https://instagram.com/${socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {socialMedia.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              Нэмэлт
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">{copyright}</p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Үйлчилгээний нөхцөл
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Нууцлалын бодлого
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
