import React from 'react'
import { Route, Routes} from "react-router-dom";
import Confirm from './Checkout/Confirm';
import Payment from './Checkout/Payment';
import Shipping from './Checkout/Shipping';
import Home from './HomePage/HomePage';
import Orders from './Order/Orders';
import OrderHistory from './OrderHistory/OrderHistory';
import ProductDetails from './Products/ProductDetails';

import Products from './Products/Products';
const Allroutes = () => {
  
  return (
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/payment" element={<Payment /> }/>
        <Route path="/orders" element={<Orders/> }/>
        
        <Route path="/shipping" element={<Shipping /> }/>
        <Route path="/confirm" element={<Confirm /> }/>
        <Route path="/orderhistory" element={<OrderHistory /> }/>
        
    </Routes>
  )
}

export default Allroutes