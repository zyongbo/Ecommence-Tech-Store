import React from "react";
import Products from "../components/ProductPage/Products";
import Hero from "../components/Hero";
import productBcg from "../images/productsBcg.jpg";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productBcg} />
      <Products />
    </>
  );
}
