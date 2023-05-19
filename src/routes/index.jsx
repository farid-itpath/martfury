import { Route, Routes } from "react-router-dom";
import {
  Error404,
  Login,
  SignUp,
  Home,
  Profile,
  Product,
  Cart,
} from "../containers";
import Layout from "../layouts/AppLayout";
import { useSelector } from "react-redux";

export default function AppRoutes() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path=":id" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      ) : (
        <Route path="*" element={<Login />} />
      )}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
