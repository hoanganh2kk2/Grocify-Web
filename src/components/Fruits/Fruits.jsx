import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from "../../assets/fruits-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Rau củ và Trái cây" bgImage={BgFruits} categories={['Rau củ', 'Trái cây']}/>
    </div>
  );
};

export default Fruits;
