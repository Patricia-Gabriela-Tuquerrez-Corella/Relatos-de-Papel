import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookList from "../components/BookList";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <BookList />
      <Footer />
    </div>
  );
};

export default HomePage;
