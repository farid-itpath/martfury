import { Route, Routes } from "react-router-dom";
import { Error404, Login, SignUp, Home, Profile, Product, Cart } from "../containers";
import Layout from "../layouts/AppLayout";

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