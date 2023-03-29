import React from 'react'
import { Route, Routes} from "react-router-dom";
import ProductDetails from './Products/ProductDetails';
import Products from './Products/Products';
const Allroutes = () => {
  return (
    <Routes >
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Allroutes