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
                <Route path="/checkout" element={<CheckOut2 />} />
                <Route path="/payment" element={<MakePayment />} />
          </Routes>
  </Router>
  )
}

export default App