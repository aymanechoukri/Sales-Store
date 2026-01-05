import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import CartProvider from "./Context/CartProvider";
import Cartpage from "./Components/CartPage";
import AuthProvider from "./Context/AuhProvider";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Products />} />
            <Route path="cart" element={<Cartpage />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
