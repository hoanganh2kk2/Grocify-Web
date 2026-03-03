import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const review = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    profession: "Nhân viên văn phòng",
    rating: 5,
    para: "Thực phẩm rất tươi và đóng gói cẩn thận. Rau củ quả giữ được độ tươi lâu, giao hàng nhanh đúng giờ. Mình sẽ tiếp tục ủng hộ lâu dài.",
    image: Customer1,
  },
  {
    id: 2,
    name: "Trần Hoàng Nam",
    profession: "Kỹ sư IT",
    rating: 4,
    para: "Chất lượng sản phẩm tốt, đặc biệt là cá hồi và thịt bò rất tươi. Giá cả hợp lý so với thị trường. Dịch vụ chăm sóc khách hàng hỗ trợ nhiệt tình.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Lê Thu Trang",
    profession: "Chủ cửa hàng ăn",
    rating: 5,
    para: "Nguồn thực phẩm sạch, có nguồn gốc rõ ràng nên mình rất yên tâm khi nhập về sử dụng. Giao hàng nhanh và ổn định mỗi ngày.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Phạm Quang Huy",
    profession: "Huấn luyện viên thể hình",
    rating: 4,
    para: "Ức gà và rau xanh luôn tươi mới, phù hợp cho chế độ ăn healthy. Đặt hàng online rất tiện và dễ sử dụng.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Đỗ Ngọc Linh",
    profession: "Nội trợ",
    rating: 5,
    para: "Mình rất hài lòng với chất lượng thực phẩm và dịch vụ giao hàng nhanh. Gia đình mình tin tưởng và đặt hàng thường xuyên.",
    image: Customer5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-360 px-10 mx-auto py-20">
        <Heading highlight="Phản hồi" heading="từ khác hàng" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>

          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full"/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
