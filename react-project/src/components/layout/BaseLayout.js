import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BuyMeCoffee from "../BuyMeCoffee";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Footer />
      <BuyMeCoffee />
      <br /> <br />
      {children}
    </>
  );
};

export default BaseLayout;
