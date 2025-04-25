import React from "react";
import TravelDetailMongolian from "./components/TravelDetailPage";
import PageHeader from "../components-e/homepage/Header";
import Footer from "../components-e/homepage/Footer";

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
