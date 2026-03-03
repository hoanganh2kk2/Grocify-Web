import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ image, title, price }) => {
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      {/* Card Icon */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-50">
        <img src={image} alt={title} className="w-full h-full mx-auto object-contain"/>
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">{formatPrice(price)}</p>
        <Button content="Mua ngay" />
      </div>
    </div>
  );
};

export default Cards;
