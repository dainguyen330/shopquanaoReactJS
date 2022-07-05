import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import styled, { css } from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { TrendingUpSharp } from "@material-ui/icons";
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.isAdmin;;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {admin && (
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/newUser" element={<NewUser />}></Route>
                <Route path="/user/:userID" element={<User />}></Route>
                <Route path="/newproduct" element={<NewProduct />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/product/:productID" element={<Product />}></Route>
              </Routes>
            </Container>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
