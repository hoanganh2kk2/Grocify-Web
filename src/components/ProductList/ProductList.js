import Butter from "../../assets/butter.png";
import Strawberry from "../../assets/strawberry.png";
import Eggs from "../../assets/eggs.png";
import Cabbage from "../../assets/cabbage.png";
import Eggplant from "../../assets/eggplant.png";
import Shrimp from "../../assets/shrimp.png";
import Kiwi from "../../assets/kiwi.png";
import Capsicum from "../../assets/capsicum.png";
import Broccoli from "../../assets/broccoli.png";
import Yogurt from "../../assets/yogurt.png";
import Beef from "../../assets/beef.png";
import ChickenBreast from "../../assets/chicken-breast.png";
import Kale from "../../assets/kale.png";
import Cheese from "../../assets/cheese.png";
import CondensedMilk from "../../assets/condensed-milk.png";
import Salmon from "../../assets/salmon.png";
import Banana from "../../assets/banana.png";
import Milk from "../../assets/milk.png";
import Pineapple from "../../assets/pineapple.png";
import Tofu from "../../assets/tofu.png";
import Tilapia from "../../assets/tilapia.png";
import SliceCheese from "../../assets/slice-cheese.png";
import RicottaCheese from "../../assets/ricotta-cheese.png";
import Grapes from "../../assets/grapes.png";
import Lettuce from "../../assets/lettuce.png";

const products = [
  // Trái cây
  {
    id: 1,
    name: "Dâu tây",
    price: 30000,
    category: "Trái cây",
    image: Strawberry,
  },
  { id: 2, name: "Kiwi", price: 25000, category: "Trái cây", image: Kiwi },
  { id: 3, name: "Chuối", price: 18000, category: "Trái cây", image: Banana },
  {
    id: 4,
    name: "Dứa (Thơm)",
    price: 32000,
    category: "Trái cây",
    image: Pineapple,
  },
  { id: 5, name: "Nho", price: 29000, category: "Trái cây", image: Grapes },

  // Rau củ
  { id: 6, name: "Bắp cải", price: 15000, category: "Rau củ", image: Cabbage },
  { id: 7, name: "Cà tím", price: 17000, category: "Rau củ", image: Eggplant },
  {
    id: 8,
    name: "Ớt chuông",
    price: 20000,
    category: "Rau củ",
    image: Capsicum,
  },
  {
    id: 9,
    name: "Bông cải xanh",
    price: 23000,
    category: "Rau củ",
    image: Broccoli,
  },
  {
    id: 10,
    name: "Cải xoăn (Kale)",
    price: 21000,
    category: "Rau củ",
    image: Kale,
  },
  { id: 11, name: "Xà lách", price: 16000, category: "Rau củ", image: Lettuce },

  // Sữa & Thực phẩm tươi
  {
    id: 12,
    name: "Bơ lạt",
    price: 30000,
    category: "Sữa và Thực phẩm tươi",
    image: Butter,
  },
  {
    id: 13,
    name: "Sữa tươi",
    price: 22000,
    category: "Sữa và Thực phẩm tươi",
    image: Milk,
  },
  {
    id: 14,
    name: "Sữa chua",
    price: 28000,
    category: "Sữa và Thực phẩm tươi",
    image: Yogurt,
  },
  {
    id: 15,
    name: "Phô mai",
    price: 35000,
    category: "Sữa và Thực phẩm tươi",
    image: Cheese,
  },
  {
    id: 16,
    name: "Phô mai lát",
    price: 33000,
    category: "Sữa và Thực phẩm tươi",
    image: SliceCheese,
  },
  {
    id: 17,
    name: "Phô mai Ricotta",
    price: 40000,
    category: "Sữa và Thực phẩm tươi",
    image: RicottaCheese,
  },
  {
    id: 18,
    name: "Sữa đặc",
    price: 26000,
    category: "Sữa và Thực phẩm tươi",
    image: CondensedMilk,
  },
  {
    id: 19,
    name: "Trứng gà",
    price: 24000,
    category: "Sữa và Thực phẩm tươi",
    image: Eggs,
  },
  {
    id: 20,
    name: "Thịt bò",
    price: 75000,
    category: "Sữa và Thực phẩm tươi",
    image: Beef,
  },
  {
    id: 21,
    name: "Ức gà",
    price: 50000,
    category: "Sữa và Thực phẩm tươi",
    image: ChickenBreast,
  },
  {
    id: 22,
    name: "Đậu phụ",
    price: 20000,
    category: "Sữa và Thực phẩm tươi",
    image: Tofu,
  },

  // Hải sản
  {
    id: 23,
    name: "Tôm tươi",
    price: 65000,
    category: "Hải sản",
    image: Shrimp,
  },
  { id: 24, name: "Cá hồi", price: 80000, category: "Hải sản", image: Salmon },
  {
    id: 25,
    name: "Cá rô phi",
    price: 52000,
    category: "Hải sản",
    image: Tilapia,
  },
];

export default products;
