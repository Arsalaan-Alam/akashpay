import { Route, Routes } from 'react-router-dom';
import Swap from './Swap';
import './App.css'
import { useState } from 'react';
import { MoonPayProvider, MoonPayBuyWidget } from '@moonpay/moonpay-react';
import Home from './Home';

const Header = () => {
  
  return(
    <header className="app-header">
      <h1>AkashPay</h1>
    </header>
  )

}

const Footer = () => {
  return (
    <footer className="footer">
    <p>&copy; 2024 AkashPay. All rights reserved.</p>
  </footer>
  )
}


function App(){
  return(
    <MoonPayProvider apiKey="pk_test_BUJfnSGvAbNifpCK3TxpIWEJz7Dm7rA" debug> 
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swap" element={<Swap />} />
      
    </Routes>
    <Footer />
    </MoonPayProvider>

  )
}

export default App;