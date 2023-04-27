import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import Profile from "./containers/Profile";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Error404 from "./containers/Error404"

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}