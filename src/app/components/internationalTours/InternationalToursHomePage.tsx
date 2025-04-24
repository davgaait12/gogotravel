import React from "react";
import PageHeader from "../homepage/Header";
import Footer from "../homepage/Footer";
import InternationalTravelPage from "./components/InternationalTravelPage";

const InternationalToursHomePage = () => {
  return (
    <div>
      <PageHeader />
      <InternationalTravelPage />
      <Footer />
    </div>
  );
};

export default InternationalToursHomePage;
