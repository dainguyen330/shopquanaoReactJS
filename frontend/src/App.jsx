import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Announcement from "./components/Announcement";
import { BrowserRouter as Router, Routes , Route, Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
