import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/home';
import Cart from '../pages/cart';
import Login from '../pages/Login';
import Register from '../pages/rejester';
import NotFound from '../pages/notfound';
import Navigation from '../nav/nav';
import ProductDetail from '../pages/Pdetail.jsx'
export default function AppRoute(){
    return (
        <>
        <BrowserRouter>
        <Navigation />  
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route> 
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/detail/:id" element={<ProductDetail/>}></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Routes>
    </BrowserRouter>
    </>
    )
    
}