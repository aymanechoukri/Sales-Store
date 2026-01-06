import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import CartProvider from "./Context/CartProvider";
import Cartpage from "./Components/CartPage";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";
import ProductCart from "./Pages/Auth/ProductCart";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Products />} />
            <Route path="cart" element={<ProductCart> <Cartpage /> </ProductCart>}/>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
