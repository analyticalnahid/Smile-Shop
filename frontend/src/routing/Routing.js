import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/cart/:id?" element={<CartPage />} />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

export default Routing;
