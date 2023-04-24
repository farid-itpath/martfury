import { Route, Routes } from "react-router-dom";
import { Error404, Login, SignUp, Home } from "../Containers";
import Layout from "../layouts/AppLayout";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}