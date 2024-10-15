import React from "react";
import AllCards from "./card/Allcards";
import "./home.style.css";
import ProductSection from "../component/ProductSection";
import Solutions from "../component/Solutions";
import Resources from "../component/Resources";
export default function Home() {
  return (
    <div>
      {/* <div className="home-background"> */}
        <AllCards />
      {/* </div> */}

      <ProductSection />
      <Solutions />
      <Resources />

    </div>
  );
}
