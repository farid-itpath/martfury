import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/AppLayout";
import MainRoutes from "./MainRoutes";
import { MainRoutesArray } from "../utils/data";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import Error404 from "../containers/Error404";

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
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
