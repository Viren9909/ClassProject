import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { DarkModeProvider } from './contexts/DarkModeContext';
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home';
import Product from './screens/Product';
import About from './screens/About';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/producform' element={<ProductForm />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  )
}

export default App
