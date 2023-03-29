import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './HomePage/HomePage';
import Products from './Products/Products';
const Allroutes = () => {
  return (
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
    </Routes>
  )
}

export default Allroutes