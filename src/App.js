import React, { createContext, useState, useEffect } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Header from "./Header/Header"

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  return (
      <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Products/:id" element={<Products />}/>
              </Routes>
        </BrowserRouter>
      </CartContext.Provider>
  );
}

export default App;
