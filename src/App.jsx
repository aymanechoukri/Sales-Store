import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Components/Products";
import CartProvider from "./Context/CartProvider";
import Cartpage from "./Components/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Products />} />
          <Route path="cart" element={<Cartpage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
