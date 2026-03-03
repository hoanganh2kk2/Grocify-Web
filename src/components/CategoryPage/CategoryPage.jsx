import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  let filteredItems = categories.includes("Tất cả")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));

  const renderProducts = filteredItems.map((product) => {
    return (
      <Cards image={product.image} title={product.name} price={product.price} />
    );
  });

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-360 mx-auto px-10">
        {renderProducts}
      </div>
    </div>
  );
};

export default CategoryPage;
