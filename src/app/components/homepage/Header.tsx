"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PageHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("mn");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Escape key дарахад хаах
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Гадна дарвал хаагдах логик
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest("#mobile-menu") &&
        !(event.target as HTMLElement).closest("#menu-button")
      ) {
        setIsOpen(false);
      }

      if (
        isLanguageMenuOpen &&
        !(event.target as HTMLElement).closest("#language-menu") &&
        !(event.target as HTMLElement).closest("#language-button")
      ) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, isLanguageMenuOpen]);

  // Одоогийн хуудас болон хэлийг шалгах
  useEffect(() => {
    const path = window.location.pathname;
    setActiveItem(path);

    // Detect current language from URL
    if (path.endsWith("-e")) {
      setCurrentLanguage("en");
    } else {
      setCurrentLanguage("mn");
    }
  }, []);

  const menuItems = {
    mn: [
      { label: "Нүүр", href: "/" },
      { label: "Гадаад Аялал", href: "/internationalTours" },
      { label: "Дотоод Аялал", href: "/domestic" },
      { label: "Мэдээ", href: "/news" },
      { label: "Бидний тухай", href: "/aboutUs" },
    ],
    en: [
      { label: "Home", href: "/home-e" },
      { label: "International Travel", href: "/internationalTours-e" },
      { label: "Domestic Travel", href: "/domesticTours-e" },
      { label: "News", href: "/news-e" },
      { label: "About Us", href: "/aboutUs-e" },
    ],
  };

  const languages = [
    { code: "mn", label: "МОН" },
    { code: "en", label: "ENG" },
  ];

  // Map current page to equivalent in other language
  const getEquivalentPage = (currentPath: string, targetLang: string) => {
    // If we're switching to Mongolian
    if (targetLang === "mn") {
      if (currentPath === "/home-e") {
        return "/";
      }
      // Remove -e from the end of the path
      return currentPath.endsWith("-e")
        ? currentPath.slice(0, -2)
        : currentPath;
    }
    // If we're switching to English
    else if (targetLang === "en") {
      if (currentPath === "/") {
        return "/home-e";
      }
      // Add -e to the end of the path if it doesn't have it
      return currentPath.endsWith("-e") ? currentPath : `${currentPath}-e`;
    }

    return targetLang === "mn" ? "/" : "/home-e";
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsLanguageMenuOpen(false);

    // Navigate to equivalent page in the selected language
    const currentPath = window.location.pathname;
    const newPath = getEquivalentPage(currentPath, langCode);
    router.push(newPath);
  };

  // Get current menu items based on language
  const currentMenuItems = menuItems[currentLanguage as keyof typeof menuItems];

  return (
    <header className="w-full bg-teal-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <Link
          href={currentLanguage === "mn" ? "/" : "/home-e"}
          className="flex items-center space-x-2 group"
        >
          <div className="relative">
            <Image
              src="/img/logo2.png"
              alt="GoGo Travel Logo"
              width={100}
              height={40}
              className="transition-transform group-hover:scale-105"
            />
          </div>
          {/* <span className="text-white text-2xl font-bold hidden sm:block">
            GoGo Travel
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {currentMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative text-white hover:text-teal-200 text-lg font-medium transition-all duration-300 py-2 px-3 rounded-md hover:bg-teal-700/50 ${
                activeItem === item.href ? "bg-teal-700/50 text-teal-200" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Language Switcher - Desktop */}
          <div className="relative ml-4">
            <button
              id="language-button"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center space-x-2 text-white hover:text-teal-200 transition-colors border border-white/30 rounded-full px-4 py-2 hover:bg-teal-700/50"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">
                {languages.find((lang) => lang.code === currentLanguage)?.label}
              </span>
            </button>

            {isLanguageMenuOpen && (
              <div
                id="language-menu"
                className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl py-1 z-40 overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-teal-50 transition-colors ${
                      currentLanguage === lang.code
                        ? "bg-teal-100 text-teal-700 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle and Language Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Switcher - Mobile */}
          <button
            id="language-button-mobile"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="text-white hover:text-teal-200 transition-colors p-2"
            aria-label={
              currentLanguage === "mn" ? "Хэл сонгох" : "Choose language"
            }
          >
            <Globe size={24} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-button"
            className="text-white hover:text-teal-200 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? currentLanguage === "mn"
                  ? "Цэс хаах"
                  : "Close menu"
                : currentLanguage === "mn"
                ? "Цэс нээх"
                : "Open menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Language Menu */}
        {isLanguageMenuOpen && (
          <div
            id="language-menu-mobile"
            className="absolute top-20 right-6 w-32 bg-white rounded-lg shadow-xl py-1 z-50 md:hidden overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`block w-full text-left px-4 py-3 text-sm ${
                  currentLanguage === lang.code
                    ? "bg-teal-100 text-teal-700 font-medium"
                    : "text-gray-700 hover:bg-teal-50"
                } transition-colors`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-teal-800 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-teal-700">
            <Link
              href={currentLanguage === "mn" ? "/" : "/home-e"}
              className="text-white text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              GoGo Travel
            </Link>
            <button
              className="text-white hover:text-teal-200 transition-colors p-2"
              onClick={() => setIsOpen(false)}
              aria-label={currentLanguage === "mn" ? "Цэс хаах" : "Close menu"}
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {currentMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-white text-2xl font-medium hover:text-teal-200 transition-colors ${
                  activeItem === item.href ? "text-teal-200" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Options in Mobile Menu */}
            <div className="flex space-x-8 mt-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`text-xl font-medium px-6 py-2 rounded-full transition-colors ${
                    currentLanguage === lang.code
                      ? "bg-white text-teal-800"
                      : "text-white border border-white hover:bg-white/10"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
