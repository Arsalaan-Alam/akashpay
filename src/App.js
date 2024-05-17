import { Route, Routes } from 'react-router-dom';
import Swap from './Swap';
import './App.css'
import { useState } from 'react';
import { MoonPayProvider, MoonPayBuyWidget } from '@moonpay/moonpay-react';

const Header = () => {
  
  return(
    <header className="app-header">
      <h1>AkashPay</h1>
    </header>
  )

}

const Home = () => {
  
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

  return(
    <div className="app">
    
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
              <a href='/swap'>
              <button className="control-button">
                Confirm
              </button>
              </a>
            </div>
          </>
        )}
      </section>
    </main>
    
    <footer className="app-footer">
      <p>AkashPay 2024</p>
    </footer>
  </div>
    
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
    </MoonPayProvider>

  )
}

export default App;