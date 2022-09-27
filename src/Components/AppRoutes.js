import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import MenuCardItem from "./MenuCardItem";
import Cart from "./Cart";
import Payment from './Payment';
const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element = { <Home/>} />
            <Route path="/item/:id" element = {<MenuCardItem/>} />
            <Route path="/cart" element = {<Cart/>} />
            <Route path='/payment' element = {<Payment/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes;
