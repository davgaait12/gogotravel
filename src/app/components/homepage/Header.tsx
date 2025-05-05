"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const pathname = usePathname();

  // Escape дарвал меню хаагдах
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Гадна дарвал хаагдах
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Pathname өөрчлөгдөхөд идэвхтэй item өөрчлөгдөх
  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const menuItems = [
    { label: "Нүүр", href: "/" },
    { label: "Гадаад Аялал", href: "/internationalTours" },
    { label: "Дотоод Аялал", href: "/domestic" },
    { label: "Мэдээ", href: "/news" },
    { label: "Бидний тухай", href: "/aboutUs" },
  ];

  return (
    <header className="w-full bg-teal-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <p className="text-2xl font-semibold text-white tracking-wider font-serif select-none">
            GoGo <span className="text-teal-300">Travel</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
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
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-button"
            className="text-white hover:text-teal-200 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Цэс хаах" : "Цэс нээх"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
              href="/"
              className="text-white text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              GoGo Travel
            </Link>
            <button
              className="text-white hover:text-teal-200 transition-colors p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Цэс хаах"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {menuItems.map((item, index) => (
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
