import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import sony from "./../assets/sony-mobile.jpg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export const ButtonIcons = [
  { id: 1, name: "messages", badgeContent: 4, icon: <MailIcon /> },
  {
    id: 2,
    name: "notifications",
    badgeContent: 17,
    icon: <NotificationsIcon />,
  },
  { id: 3, name: "profile", icon: <AccountCircle /> },
];

export const Categories = {
  clothing: { list: ["Shirts", "Pants", "Shoes"], icon: CheckroomIcon },
  furniture: {
    list: ["Executive Chair", "Sofa", "Table", "Office Chair"],
    icon: ChairIcon,
  },
  electronics: {
    list: ["Mobiles", "Wearables", "Laptops"],
    icon: PhoneAndroidIcon,
  },
};

export const Products = [
  {
    id: 1,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 2,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 3,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 4,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 5,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 6,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
  {
    id: 7,
    name: "Sony Mobile",
    price: "100",
    description: "A quick brown fox jumps over a lazy dog!",
    image: { sony },
  },
];
