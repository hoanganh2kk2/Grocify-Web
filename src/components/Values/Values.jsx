import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const values = [
  {
    id: 1,
    title: "Uy tín & tin cậy",
    para: "Chúng tôi xây dựng niềm tin với khách hàng bằng sản phẩm chất lượng, nguồn gốc rõ ràng và dịch vụ minh bạch.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Luôn tươi mới",
    para: "Thực phẩm được tuyển chọn mỗi ngày, đảm bảo độ tươi ngon và giữ trọn hương vị tự nhiên.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "An toàn thực phẩm",
    para: "Quy trình bảo quản và kiểm soát nghiêm ngặt giúp đảm bảo an toàn cho sức khỏe người tiêu dùng.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% hữu cơ",
    para: "Sản phẩm đạt tiêu chuẩn hữu cơ, không hóa chất độc hại, thân thiện với sức khỏe và môi trường.",
    icon: <FaSeedling />,
  },
];

const Values = () => {
  const leftValues = values.slice(0, 2).map((item) => {
    return (
      <div className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = values.slice(2).map((item) => {
    return (
      <div className="flex items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-360 mx-auto px-10">
        <Heading highlight="Giá trị" heading="cốt lõi" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          <div className="md:flex hidden w-1/2">
            <img src={Basket} alt="Basket of vegetables" />
          </div>

          {/* Right Value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
