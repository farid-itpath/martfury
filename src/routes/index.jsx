import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Error404,
  Home,
  Login,
  Product,
  Profile,
  Purchase,
  SignUp,
} from "../containers";
import Layout from "../layouts/AppLayout";
import Orders from "../containers/Orders";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
