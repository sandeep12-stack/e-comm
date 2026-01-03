import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import ProductDetail from "./productdetail";
import Checkout from "./checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
