import React from "react";
import { Route, Routes } from "react-router-dom";
// import Blog from './Admin/Dashboard';
// import Multistep from "../pages/Admin/Package";
// import Order from "./Admin/Order";
// import Customers from "./Admin/Customers";
import Home from "./HomePage/HomePage";
import ProductDetails from "./Products/ProductDetails";

import Products from "./Products/Products";
import SidebarWithHeader from "./Admin/Sidebar";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/adminpanel" element={<SidebarWithHeader />} />
      {/* <Route path="/adminpanel" element={<Blog />} />
      <Route path="/adminpanel/package" element={<Multistep />} />
      <Route path="/adminpanel/customers" element={<Customers />} />
      <Route path="/adminpanel/order" element={<Order />} /> */}
    </Routes>
  );
};

export default Allroutes;
