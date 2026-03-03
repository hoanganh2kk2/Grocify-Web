import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const category = [
  {
    id: 1,
    title: "Rau củ và Trái cây",
    description:
      "Rau củ và trái cây tươi sạch, hữu cơ, được thu hoạch mỗi ngày từ các nông trại địa phương. Đa dạng trái cây theo mùa và rau xanh tươi ngon.",
    image: FruitsCat,
    path: "/fruits"
  },
  {
    id: 2,
    title: "Sữa và Thực phẩm tươi",
    description:
      "Các sản phẩm sữa và trứng chất lượng cao, an toàn cho sức khỏe. Bao gồm sữa tươi, sữa chua, trứng gà thả vườn và phô mai.",
    image: DairyCat,
    path: "/dairy"
  },
  {
    id: 3,
    title: "Thịt và Hải sản",
    description:
      "Thịt và hải sản tươi ngon, được tuyển chọn kỹ lưỡng, đảm bảo nguồn gốc rõ ràng. Đa dạng các loại thịt tươi, ướp sẵn và hải sản chất lượng.",
    image: SeaFoodCat,
    path: "/seafood"
  },
];

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      // Card
      <div className="flex-1 basis-75" key={card.id}>
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img
            src={card.image}
            alt={card.title}
            className="absolute bottom-0"
          />
        </div>

        {/* Card Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-360 mx-auto px-10 py-20">
        <Heading highlight="Danh mục" heading="sản phẩm" />

        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;
