import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import bgDairy from "../../assets/dairy-banner.jpg";

const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Sữa và Thực phẩm tươi" bgImage={bgDairy} categories={'Sữa và Thực phẩm tươi'}/>
    </div>
  );
};

export default Dairy;
