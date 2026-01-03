import { useEffect, useState } from "react";
import { CartContext } from "./CreatContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("shopping");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("shopping", JSON.stringify(cart));
    } else {
      localStorage.removeItem("shopping");
    }
  }, [cart]);

  function addCart(items) {
  setCart((prev) => {
    const checkPrev = prev.find((item) => item.id === items.id);

    if (checkPrev) {
      return prev.map((item) =>
        item.id === items.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...items, quantity: 1 }];
  });
}

  function removeCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function nigatifQuntity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function positifQuntity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ addCart, cart, removeCart, positifQuntity, nigatifQuntity }}
    >
      {children}
    </CartContext.Provider>
  );
}
