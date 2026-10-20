import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import ProductsHome from "../../Component/ProductsHome/ProductsHome";
import { Suspense } from "react";

// product data load
//create a promise outside the componente
const productsData = fetch("/products.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <title>Lapata - Home</title>
      <HeroSection></HeroSection>
    {/* all data sent to main space use suspense  */}
      <Suspense fallback={<p>DATA IS LOADING.............</p>}>
        <ProductsHome productsData={productsData}></ProductsHome>
      </Suspense>
    </div>
  );
};

export default Home;
