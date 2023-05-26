import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Error404,
  Home,
  Login,
  Product,
  Profile,
  SignUp,
} from "../containers";
import Layout from "../layouts/AppLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
