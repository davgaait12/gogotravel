import React from "react";
import Footer from "./Footer";

import Carousel from "./Carousel";
import Partner from "./Partner";
import FeaturedTours from "./FeaturedTours";
import DomesticTours from "./DomesticTours";
import InternationalTours from "./InternationalTours";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Partner />
      <FeaturedTours />
      <DomesticTours />
      <InternationalTours />
      <Footer />
    </div>
  );
};

export default HomePage;
