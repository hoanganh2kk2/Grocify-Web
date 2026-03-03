import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Chọn lọc nguồn cung",
    para: "Chúng tôi hợp tác với nhà cung cấp uy tín, đảm bảo thực phẩm có nguồn gốc rõ ràng và đạt tiêu chuẩn an toàn.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Sản xuất & đóng gói",
    para: "Quy trình sản xuất và đóng gói được thực hiện theo tiêu chuẩn vệ sinh nghiêm ngặt nhằm giữ trọn độ tươi ngon.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Kiểm soát chất lượng",
    para: "Mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi xuất kho, đảm bảo an toàn thực phẩm và chất lượng tốt nhất.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Giao hàng nhanh chóng",
    para: "Hệ thống vận chuyển linh hoạt giúp sản phẩm đến tay khách hàng nhanh chóng và vẫn giữ nguyên độ tươi mới.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        className={`flex-1 basis-75 ${item.id % 2 === 0 ? "md:-mt-100" : ""}`}
      >
        <span className="flex justify-center items-center w-18 h-18 mx-auto rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
          {item.number}
        </span>

        <div className="flex items-center gap-x-5 mt-10">
          <span className="flex justify-center items-center text-3xl bg-linear-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-360 mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Quy trình" heading="chất lượng" />
        </div>

        <div className="flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
