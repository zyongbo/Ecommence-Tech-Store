import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import CartBcg from "../images/storeBcg.jpg";

export default function CartPage() {
  return (
    <>
      <Hero img={CartBcg} />
      <CartSection />
    </>
  );
}
