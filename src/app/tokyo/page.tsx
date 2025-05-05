import React from "react";
import PageHeader from "../components/homepage/Header";

import Footer from "../components/homepage/Footer";
import TravelDetailMongolian from "./components/TravelDetailPage";

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
