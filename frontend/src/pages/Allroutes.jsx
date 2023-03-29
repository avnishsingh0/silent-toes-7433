import React from 'react'
import { Route, Routes} from "react-router-dom";
import Products from './Products/Products';
const Allroutes = () => {
  
  return (
    <Routes >
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/product' element={<Products/>}/>
    </Routes>
  )
}

export default Allroutes