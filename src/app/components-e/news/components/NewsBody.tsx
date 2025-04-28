"use client";
import React, { useState, useEffect } from "react";

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
  const [currencyRates, setCurrencyRates] = useState<CurrencyRate[]>([
    { currency: "USD", rate: 3520, lastUpdated: new Date() },
    { currency: "EUR", rate: 3800, lastUpdated: new Date() },
    { currency: "JPY", rate: 22.5, lastUpdated: new Date() },
    { currency: "KRW", rate: 2.5, lastUpdated: new Date() },
    { currency: "CNY", rate: 471, lastUpdated: new Date() },
    { currency: "RUB", rate: 37, lastUpdated: new Date() },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch currency rates in real-time
  const fetchCurrencyRates = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Can use MongoDB Realm, Mock API or other API
      // Option 1: Use mock data for testing the API
      // When you are able to connect to a real API, replace this section with code to send API request

      // Create a delay to simulate the process
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Create alternative rates with variations (test data, not real)
      const randomFactor = 0.98 + Math.random() * 0.04; // +/- 2% fluctuation

      const newRates: CurrencyRate[] = [
        {
          currency: "USD",
          rate: Math.round(3520 * randomFactor),
          lastUpdated: new Date(),
        },
        {
          currency: "EUR",
          rate: Math.round(3800 * randomFactor),
          lastUpdated: new Date(),
        },
        {
          currency: "JPY",
          rate: Math.round(22.5 * randomFactor * 10) / 10,
          lastUpdated: new Date(),
        },
        {
          currency: "KRW",
          rate: Math.round(2.5 * randomFactor * 10) / 10,
          lastUpdated: new Date(),
        },
        {
          currency: "CNY",
          rate: Math.round(471 * randomFactor),
          lastUpdated: new Date(),
        },
        {
          currency: "RUB",
          rate: Math.round(37 * randomFactor * 10) / 10,
          lastUpdated: new Date(),
        },
      ];

      setCurrencyRates(newRates);

      // If you want to use a real API, use the code below
      /* 
      // Send request to API
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/MNT');
      
      if (!response.ok) {
        throw new Error('Error fetching currency rates');
      }
      
      const data = await response.json();
      
      // Process the information from the API
      const newRates: CurrencyRate[] = [
        { currency: "USD", rate: Math.round(1 / data.rates.USD), lastUpdated: new Date() },
        { currency: "EUR", rate: Math.round(1 / data.rates.EUR), lastUpdated: new Date() },
        { currency: "JPY", rate: Math.round(100 / data.rates.JPY) / 100, lastUpdated: new Date() },
        { currency: "KRW", rate: Math.round(100 / data.rates.KRW) / 100, lastUpdated: new Date() },
        { currency: "CNY", rate: Math.round(1 / data.rates.CNY), lastUpdated: new Date() },
        { currency: "RUB", rate: Math.round(100 / data.rates.RUB) / 100, lastUpdated: new Date() },
      ];
      
      setCurrencyRates(newRates);
      */
    } catch (err) {
      console.error("Error fetching currency rates:", err);
      setError("Error fetching currency rates. Please try again.");
      // Keep the old values in case of error
    } finally {
      setIsLoading(false);
    }
  };

  // Call the update function when the component loads
  useEffect(() => {
    fetchCurrencyRates();

    // Update every 1 minute (for testing purposes, can be 5-10 minutes for real systems)
    const intervalId = setInterval(fetchCurrencyRates, 60 * 1000);

    // Cancel the interval when the component is destroyed
    return () => clearInterval(intervalId);
  }, []);

  const childTravelTips: ChildTravelTip[] = [
    {
      title: "Health Insurance",
      description: "Child travel insurance is mandatory",
      icon: "🏥",
    },
    {
      title: "Medicine List",
      description: "Bring medicines for fever, food poisoning, allergies, etc.",
      icon: "💊",
    },
    {
      title: "Documents",
      description: "Foreign passport, birth certificate, permissions",
      icon: "📄",
    },
    {
      title: "Food & Nutrition",
      description: "Prepare suitable food, drinks, and snacks for children",
      icon: "🍱",
    },
    {
      title: "Games & Entertainment",
      description: "Bring favorite toys, books, tablets",
      icon: "🎮",
    },
    {
      title: "Safety",
      description: "Monitor children's movements, use GPS tracker",
      icon: "🔒",
    },
  ];

  const travelTips: TravelTip[] = [
    {
      category: "Documents",
      tips: [
        "Passport must be valid for at least 6 months",
        "Check visa requirements",
        "Get authorization from family members",
        "Make copies of insurance documents",
      ],
    },
    {
      category: "Health",
      tips: [
        "Travel insurance is mandatory",
        "Get required vaccinations",
        "Prepare a list of medicines",
        "Check the health situation of the destination country",
      ],
    },
    {
      category: "Finance",
      tips: [
        "Bring cash",
        "Activate your international card",
        "Research currency exchange locations",
        "Create a travel budget",
      ],
    },
    {
      category: "Safety",
      tips: [
        "Get the embassy phone number",
        "Emergency contact numbers",
        "Protect your personal information",
        "Keep in regular contact with your family",
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
            All the information you need to prepare for your trip in one place
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Currency Exchange Rates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">💰</span>
            Currency Exchange Rates
            <button
              onClick={fetchCurrencyRates}
              className="ml-4 px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700 transition-colors"
            >
              Refresh
            </button>
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded flex items-center justify-between">
              <span>{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-red-700 hover:text-red-900"
              >
                ✕
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {isLoading
              ? // Loading state view
                Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={`loading-${index}`}
                      className="bg-white rounded-lg shadow-md p-4 animate-pulse"
                    >
                      <div className="h-5 bg-gray-200 rounded w-16 mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded w-24 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  ))
              : currencyRates.map((rate) => (
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
                      Updated: {rate.lastUpdated.toLocaleTimeString()}{" "}
                      {rate.lastUpdated.toLocaleDateString()}
                    </p>
                  </div>
                ))}
          </div>
        </section>

        {/* Traveling with Children Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">👶</span>
            Things to Consider When Traveling with Children
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

        {/* General Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            General Tips
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
                Plan your trip early and prepare well for a safe and comfortable
                journey
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Insurance</h3>
              <p>
                Always get health and travel insurance when traveling abroad
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-bold mb-2">Communication</h3>
              <p>
                Stay in regular contact with your family and let them know where
                you are
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
