import React from "react";
import AllCards from "./card/Allcards";
import ProductSection from "../component/ProductSection";
import Solutions from "../component/Solutions";
import Resources from "../component/Resources";
import Contactus from '../component/Contactus'
export default function Home() {
  return (
    <div>
        <AllCards />

      <ProductSection />
      <Solutions />
      <Resources />
<Contactus/>
    </div>
  );
}
