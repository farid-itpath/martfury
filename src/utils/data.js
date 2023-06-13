import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Home from "../containers/Home";
import Product from "../containers/Product";
import Profile from "../containers/Profile";
import Cart from "../containers/Cart";
import Purchase from "../containers/Purchase";
import Orders from "../containers/Orders";

export const ButtonIcons = [
  { id: 1, name: "home", url: "", icon: <HomeIcon /> },
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

export const MainRoutesArray = [
  {
    id: 1,
    name: "Home",
    index: true,
    element: <Home />,
  },
  {
    id: 2,
    name: "Product",
    path: ":id",
    element: <Product />,
  },
  {
    id: 3,
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    id: 4,
    name: "Cart",
    path: "cart",
    element: <Cart />,
  },
  {
    id: 5,
    name: "Purchase",
    path: "purchase",
    element: <Purchase />,
  },
  {
    id: 6,
    name: "Orders",
    path: "orders",
    element: <Orders />,
  },
];
