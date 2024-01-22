import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Woman from './pages/Woman'
import AllProduct from './pages/AllProduct'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ShopCart from './pages/ShopCart'
import Chekout from './pages/Chekout'
import Man from './pages/Man'
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Favorite from './pages/Favorite'
import AddProduct from './pages/AddProduct'
import Showproduct from './pages/Showproduct'
import EditProduct from './pages/EditProduct'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <>

      <Router>
          <Header></Header>
        <Routes>  

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/woman" element={<Woman></Woman>}></Route>
          <Route path="/man" element={<Man></Man>}></Route>
          <Route path="/allproduct" element={<AllProduct></AllProduct>}></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/shopcart" element={<ShopCart></ShopCart>}></Route>
          <Route path="/checkout" element={<Chekout></Chekout>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          <Route path="/admin/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/admin/showproduct" element={<Showproduct></Showproduct>}></Route>
          <Route path="/admin/edit/:id" element={<EditProduct></EditProduct>}></Route>
        </Routes>
          <Footer></Footer>

      </Router>

    </>
  );
}

export default App;
