import React from "react";
import TravelDetailPage from "./components/TravelDetailPage";
import PageHeader from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";

const page = () => {
  return (
    <div>
      <PageHeader />
      <TravelDetailPage />
      <Footer />
    </div>
  );
};

export default page;
