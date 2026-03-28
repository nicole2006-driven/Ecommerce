// Routing: Import components for navigation between pages
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
 


  console.log("This is my 1st program of React.");
const name = "Nicole";
console.log("User name is:", name);
  

  
  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Mobile", price: 20000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 3000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smart Watch", price: 7000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Keyboard", price: 1500, image: "https://via.placeholder.com/150" }
  ];

  return (
    // Redux: CartProvider wraps app to avoid prop drilling
    <CartProvider>
      {/* Routing: BrowserRouter enables navigation without page reload */}
      <BrowserRouter>
        <Header />

        {/* Routing: Define page routes */}
        <Routes>
          {/* Props: Pass products array to ProductList component */}
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}






export default App;

