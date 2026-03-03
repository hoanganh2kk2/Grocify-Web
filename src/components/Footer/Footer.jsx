import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-360 mx-auto px-10">
        <div className="flex-1 basis-75">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>

          <p className="text-zinc-600 mt-6 max-w-87.5">
            Chuyên cung cấp thực phẩm tươi sạch, rau củ quả hữu cơ và sản phẩm
            an toàn cho sức khỏe. Cam kết chất lượng, nguồn gốc rõ ràng và giao
            hàng nhanh chóng.
          </p>

          <p className="text-zinc-800 mt-6">
            2026 &copy; Tất cả quyền lợi được bảo lưu.
          </p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Công ty</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Giới thiệu
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Câu hỏi thường gặp
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Hỗ trợ</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Trung tâm trợ giúp
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Góp ý & phản hồi
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Liên hệ
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Liên hệ với chúng tôi</h5>

          <p className="mt-6 text-zinc-600">
            Bạn có câu hỏi hoặc cần hỗ trợ?
            <br />
            Hãy để lại email, chúng tôi sẽ liên hệ sớm nhất!
            <br />
          </p>

          <div className="flex bg-white p-1 rounded-lg mt-6">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Nhập email của bạn"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
