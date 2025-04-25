"use client";
import React, { useState } from "react";

interface CurrencyRate {
  currency: string;
  rate: number;
  lastUpdated: Date;
}

interface ChildTravelTip {
  title: string;
  description: string;
  icon: string;
}

interface TravelTip {
  category: string;
  tips: string[];
}

const NewsBody = () => {
  const [currencyRates] = useState<CurrencyRate[]>([
    { currency: "USD", rate: 3520, lastUpdated: new Date() },
    { currency: "EUR", rate: 3800, lastUpdated: new Date() },
    { currency: "JPY", rate: 22.5, lastUpdated: new Date() },
    { currency: "KRW", rate: 2.5, lastUpdated: new Date() },
    { currency: "CNY", rate: 471, lastUpdated: new Date() },
    { currency: "RUB", rate: 37, lastUpdated: new Date() },
  ]);

  const childTravelTips: ChildTravelTip[] = [
    {
      title: "Health Insurance",
      description: "Travel insurance for children is mandatory",
      icon: "🏥",
    },
    {
      title: "Medicine List",
      description:
        "Pack fever reducers, food poisoning, and allergy medications",
      icon: "💊",
    },
    {
      title: "Documents",
      description:
        "Obtain international passport, birth certificate, and permissions",
      icon: "📄",
    },
    {
      title: "Food and Nutrition",
      description: "Prepare child-appropriate meals, drinks, and light snacks",
      icon: "🍱",
    },
    {
      title: "Entertainment",
      description: "Bring favorite toys, books, and tablets",
      icon: "🎮",
    },
    {
      title: "Safety",
      description: "Monitor children's movements and use GPS trackers",
      icon: "🔒",
    },
  ];

  const travelTips: TravelTip[] = [
    {
      category: "Documents",
      tips: [
        "Passport must be valid for at least 6 months",
        "Check visa requirements",
        "Obtain family member authorizations",
        "Make copies of insurance documents",
      ],
    },
    {
      category: "Health",
      tips: [
        "Must purchase travel insurance",
        "Get necessary vaccinations",
        "Prepare medication list",
        "Check destination country's health status",
      ],
    },
    {
      category: "Finance",
      tips: [
        "Carry some cash",
        "Activate international cards",
        "Research currency exchange locations",
        "Create travel budget",
      ],
    },
    {
      category: "Security",
      tips: [
        "Get embassy contact numbers",
        "Emergency contact numbers",
        "Protect personal information",
        "Stay in regular contact with family",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Information
          </h1>
          <p className="text-xl opacity-90">
            All the information you need for travel preparation in one place
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Currency Exchange Rates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">💰</span>
            Currency Exchange Rates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currencyRates.map((rate) => (
              <div
                key={rate.currency}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <h3 className="font-bold text-lg text-teal-600">
                  {rate.currency}
                </h3>
                <p className="text-2xl font-semibold mt-2">
                  {rate.rate.toLocaleString()} ₮
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Updated: {rate.lastUpdated.toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for Traveling with Children */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">👶</span>
            Tips for Traveling with Children
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {childTravelTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{tip.icon}</span>
                  <h3 className="font-bold text-lg group-hover:text-teal-600 transition-colors">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* General Travel Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            General Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelTips.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-bold text-xl text-teal-600 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Most Important Tips */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🌟 Most Important Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Planning</h3>
              <p>
                Plan your travel early and prepare thoroughly for a safe and
                enjoyable journey
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Insurance</h3>
              <p>
                Always purchase health and travel insurance when traveling
                abroad
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Communication</h3>
              <p>
                Stay in regular contact with family and inform them of your
                whereabouts
              </p>
            </div>
          </div>
        </section>

        {/* Footer with helpful links */}
        <footer className="mt-12 text-center text-gray-600">
          <p>© 2025 Travel Information. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-teal-600 hover:underline">
              Embassy
            </a>
            <a href="#" className="text-teal-600 hover:underline">
              Ministry of Foreign Affairs
            </a>
            <a href="#" className="text-teal-600 hover:underline">
              Flight Schedule
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewsBody;
