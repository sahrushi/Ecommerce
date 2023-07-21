import React, { createContext, useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Header from "./Header/Header"

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products/:id" element={<Products />}/>
                {/* <Route path="/Products" element={<Products />}/> */}

            </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
