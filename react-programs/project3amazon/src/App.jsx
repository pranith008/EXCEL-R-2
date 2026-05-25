import React from 'react'
import ShowAllProducts from './components/ShowAllProducts'
import ShowAllProducts2 from './components/ShowAllProducts2'
import ShowAllProducts3 from './components/ShowAllProducts3'
import AllProductsPage from './pages/AllProductsPage'
import RictTextBox2 from './pages/RictTextBox2'
import AllProductsPage1 from './pages/AllProductsPage1'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import NavBar1 from './components/NavBar1'
import SingleProduct from './pages/SingleProduct'
import AllProductsPage2 from './pages/AllProductsPage2'
import SingleProduct2 from './pages/SingleProduct2'
import ShoppingCart from './pages/ShoppingCart'
import CheckOut from './pages/CheckOut'
import MakePayment from './pages/MakePayment'
import CheckOut2 from './pages/CheckOut2'
import OrderConfirmation from './pages/OrderConfirmation'
import CheckOut3 from './pages/CheckOut3'
import MakePayment2 from './pages/MakePayment2'
import OrderConfirmation2 from './pages/OrderConfirmation2'
import OrderConfirmation4 from './pages/OrderConfirmation4'
import MakePayment3 from './pages/MakePayment3'
import CheckOut4 from './pages/CheckOut4'
import AddProducts from './pages/AddProducts'
import AddProducts1 from './pages/AddProducts1'
import RegisterUser from './pages/RegisterUser'
import RegisterUser1 from './pages/RegisterUser1'
import LoginUser from './pages/LoginUser'

const App = () => {
  return (
  <Router>
      <NavBar1/>
          <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<AllProductsPage2 />} />
                <Route path="/rich" element={<RictTextBox2 />} />
                <Route path="/single/:prodid" element={<SingleProduct2 />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckOut4 />} />
                <Route path="/payment" element={<MakePayment3 />} />
                <Route path="/proceed" element={<OrderConfirmation4 />} />
                <Route path="/add" element={<AddProducts1 />} />
                <Route path="/register" element={<RegisterUser1 />} />
                <Route path="/login" element={<LoginUser />} />
          </Routes>
  </Router>
  )
}

export default App