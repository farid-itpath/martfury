import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import sony from "./../assets/images/sony-mobile.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import shoes from "./../assets/images/shoes.jpeg";
import pant1 from "./../assets/images/pant1.jpeg";
import shirt1 from "./../assets/images/shirt1.jpeg";
import chair1 from "./../assets/images/chair1.jpeg";
import sofa1 from "./../assets/images/sofa1.jpeg";
import table1 from "./../assets/images/table1.jpeg";
import chair2 from "./../assets/images/chair2.jpeg";
import samsung from "./../assets/images/samsung.jpeg";
import dell from "./../assets/images/dell.jpeg";
import watch from "./../assets/images/watch.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ButtonIcons = [
  { id: 1, name: "home", url: "home", icon: <HomeIcon /> },
  {
    id: 2,
    name: "cart",
    url: "cart",
    badgeContent: 2,
    icon: <ShoppingCartIcon />,
  },
  { id: 3, name: "messages", url: "", badgeContent: 4, icon: <MailIcon /> },
  {
    id: 4,
    name: "notification",
    url: "",
    badgeContent: 13,
    icon: <NotificationsIcon />,
  },
];

export const AccountItems = [{ id: 1, name: "profile" }];

export const Categories = {
  clothing: { list: ["Shirts", "Pants", "Shoes"], icon: <CheckroomIcon /> },
  furniture: {
    list: ["Executive Chair", "Sofa", "Table", "Office Chair"],
    icon: <ChairIcon />,
  },
  electronics: {
    list: ["Mobiles", "Wearables", "Laptops"],
    icon: <PhoneAndroidIcon />,
  },
};

export const Products = [
  {
    id: 1,
    name: "Sony Mobile",
    price: "500",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sony,
    review: 'good product',
  },
  {
    id: 2,
    name: "Table",
    price: "300",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: table1,
    review: 'good product',
  },
  {
    id: 3,
    name: "Executive chair",
    price: "300",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: chair1,
    review: 'good product',
  },
  {
    id: 4,
    name: "Shima Shoes",
    price: "50",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: shoes,
    review: 'good product',
  },
  {
    id: 5,
    name: "Shirt",
    price: "50",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: shirt1,
    review: 'good product',
  },
  {
    id: 6,
    name: "Pants",
    price: "70",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: pant1,
    review: 'good product',
  },
  {
    id: 7,
    name: "Sofa",
    price: "70",
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: sofa1,
    review: 'good product',
  },
  {
    id: 8,
    name: "Dell Laptop",
    price: "1200",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: dell,
    review: 'good product',
  },
  {
    id: 9,
    name: "1+ Smart Watch",
    price: "200",
    rating: 2.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: watch,
    review: 'good product',
  },
  {
    id: 10,
    name: "Chair",
    price: "200",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: chair2,
    review: 'good product',
  },
  {
    id: 11,
    name: "Samsung Galaxy",
    price: "400",
    rating: 1.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: samsung,
    review: 'good product',
  },
];

export const TempCart = [
  {
    id: 10,
    name: "Chair",
    price: "200",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: chair2,
  },
  {
    id: "11",
    name: "Samsung Galaxy",
    price: "400",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: samsung,
  },
];
