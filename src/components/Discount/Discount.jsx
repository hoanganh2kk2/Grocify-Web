import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-360 mx-auto px-10 py-10">
        <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-175">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
            Giảm giá cho đơn hàng đầu tiên!
          </h3>
          <p className="text-zinc-600 my-6">
            Nhận ngay ưu đãi 20% cho lần mua đầu tiên tại cửa hàng thực phẩm của
            chúng tôi. Mua sắm thực phẩm tươi sạch, rau củ quả hữu cơ và nhiều
            sản phẩm chất lượng với giá tốt. Giao hàng nhanh chóng – đảm bảo an
            toàn thực phẩm.
          </p>
          <Button content="Nhận ưu đãi ngay" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
