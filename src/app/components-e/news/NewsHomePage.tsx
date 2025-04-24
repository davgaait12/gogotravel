import React from "react";
import PageHeader from "../homepage/Header";
import NewsBody from "./components/NewsBody";
import Footer from "../homepage/Footer";

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
