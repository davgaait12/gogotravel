import React from "react";
import PageHeader from "../homepage/Header";

import Footer from "../homepage/Footer";
import NewsBody from "./components/NewsBody";

const NewsHomePage = () => {
  return (
    <div>
      <PageHeader />
      <NewsBody />
      <Footer />
    </div>
  );
};

export default NewsHomePage;
