import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    "Tất cả",
    "Trái cây",
    "Rau củ",
    "Sữa và Thực phẩm tươi",
    "Thịt và Hải sản",
  ];
  const [activeTab, setActiveTab] = useState("Tất cả");

  let filteredProducts =
    activeTab === "Tất cả"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  const renderCards = filteredProducts.slice(0, 8).map((product) => {
    return (
      <Cards image={product.image} title={product.name} price={product.price} />
    );
  });

  return (
    <section>
      <div className="max-w-360 mx-auto px-10 py-20">
        <Heading highlight="Sản phẩm" heading="nổi bật" />

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-10">
          <div className="md:flex grid grid-cols-3 gap-3">
            {categories.slice(0, 3).map((category) => {
              return (
                <button
                  key={category}
                  className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? "bg-linear-to-b from-orange-400 to-orange-500 text-white" : "bg-zinc-100"}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="md:flex grid grid-cols-2 gap-3">
            {categories.slice(3).map((category) => {
              return (
                <button
                  key={category}
                  className={`md:px-5 px-1 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? "bg-linear-to-b from-orange-400 to-orange-500 text-white" : "bg-zinc-100"}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Listing */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-9 mt-20">
          {renderCards}
        </div>

        <div className="mt-15 mx-auto w-fit">
          <Link
            to={'all-products'}
            className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
