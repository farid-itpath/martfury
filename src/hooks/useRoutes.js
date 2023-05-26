import { useSelector } from "react-redux";
import useFetch from "./useFetch";
import { Cart, Home, Login, Product, Profile, SignUp } from "../containers";
import { useMemo } from "react";

export const useRoutes = () => {
  const token = useSelector((state) => state.auth.user?.token);
  const { data } = useFetch({
    initialUrl: "/api/customer/profile",
    config: { headers: { Authorization: `Bearer ${token}` } },
  });
  const access = data ? true : false;
  const Routes = [
    {
      id: "login",
      path: "login",
      element: <Login />,
      access: true,
      hasPlainLayout: true,
    },
    {
      id: "signup",
      path: "signup",
      element: <SignUp />,
      access: true,
      hasPlainLayout: true,
    },
    {
      id: "home",
      path: "/home",
      element: <Home />,
      access,
    },
    {
      id: "product",
      path: ":id",
      element: <Product />,
      access,
    },
    {
      id: "profile",
      path: "profile",
      element: <Profile />,
      access,
    },
    {
      id: "cart",
      path: "cart",
      element: <Cart />,
      access,
    },
  ];
  const accessibleRoutes = useMemo(() => {
    return Routes.filter((value) => value.access);
  });

  const unAuthorizedRoutes = useMemo(() => {
    return Routes.filter((value) => !value.access);
  });

  const plainLayoutRoutes = useMemo(() => {
    return accessibleRoutes.filter((value) => value.hasPlainLayout);
  });

  const appLayoutRoutes = useMemo(() => {
    return accessibleRoutes.filter((value) => !value.hasPlainLayout);
  });

  return {
    plainLayoutRoutes,
    appLayoutRoutes,
    unAuthorizedRoutes,
  };
};
