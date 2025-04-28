import React from "react";
import PageHeader from "../components/homepage/Header";
import TravelDetailMongolian from "./components/TravelDetailPage";
import Footer from "../components/homepage/Footer";

const page = () => {
  return (
    <div>
      <PageHeader />
      <TravelDetailMongolian />
      <Footer />
    </div>
  );
};

export default page;
