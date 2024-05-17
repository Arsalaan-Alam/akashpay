import React, { useState } from 'react';
import { MoonPayProvider, MoonPayBuyWidget } from '@moonpay/moonpay-react';
import './App.css';
import Swap from './Swap'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleStart = () => {
    if (amount) {
      setVisible(true);
    } else {
      alert('Please enter an amount in USD');
    }
  };

  const handleStartOver = () => {
    setVisible(false);
    setAmount('');
  };

  return (
    <MoonPayProvider apiKey="pk_test_BUJfnSGvAbNifpCK3TxpIWEJz7Dm7rA" debug>
      <div className="app">
        <header className="app-header">
          <h1>AkashPay</h1>
        </header>
        
        <main className="app-main">
          {!visible && (
            <>
              <section className="intro">
                <h2>Convert your USD to Crypto effortlessly</h2>
                <p>Enter the amount in USD and start your crypto journey today.</p>
              </section>
              <section className="form-section">
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                  placeholder="Enter USD amount" 
                  className="amount-input"
                />
                <button onClick={handleStart} className="start-button">
                  Start
                </button>
              </section>
            </>
          )}
          
          <section className="widget-section">
            {visible && (
              <>
                <MoonPayBuyWidget
                  variant="embedded"
                  baseCurrencyCode="usd"
                  baseCurrencyAmount={amount}
                  defaultCurrencyCode="eth"
                  visible={visible}
                />
                <div className="button-group">
                  <button onClick={handleStartOver} className="control-button">
                    Start Over
                  </button>
                  <button className="control-button">
                    Confirm
                  </button>
                </div>
              </>
            )}
          </section>
        </main>
        
        <footer className="app-footer">
          <p>AkashPay 2024</p>
        </footer>
      </div>
    </MoonPayProvider>
  );
}

export default App;
