import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="min-h-screen max-w-360 mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
      {/* Hero Content */}
      <div className="flex-1">
        <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
          Sản phẩm chất lượng cao
        </span>
        <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
          <span className="text-orange-500">Trái cây</span> và
          <span className="text-orange-500"> Rau củ</span> tươi ngon
        </h1>
        <p className="text-zinc-600 md:text-lg text-md max-w-132.5 mt-5 mb-10">
          Được chọn lọc và nuôi trồng với hàm lượng dưỡng chất cao. Sản phẩm của
          chúng tôi luôn tươi ngon và tốt cho sức khỏe.
        </p>
        <Button content="Mua ngay" />
      </div>

      {/* Hero Image */}
      <div className="flex-1">
        <img src={Grocery} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
