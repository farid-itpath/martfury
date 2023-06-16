import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/AppLayout";
import MainRoutes from "./MainRoutes";
import { MainRoutesArray } from "../utils/data";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import Error404 from "../containers/Error404";
import ForgotPassword from "../containers/ForgotPassword";
import ResetPassword from "../containers/ResetPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainRoutes />}>
        <Route path="/" element={<Layout />}>
          {MainRoutesArray.map((item) => (
            <Route
              index={item?.index}
              path={item?.path}
              element={item.element}
              key={item.id}
            />
          ))}
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="resetPassword" element={<ResetPassword />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
