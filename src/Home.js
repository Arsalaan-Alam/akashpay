import './App.css';
import { useState, useEffect } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [priceData, setPriceData] = useState('');

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/akash-network');
        const data = await response.json();
        setPriceData(data);
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchPriceData();
  }, []);

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

  const calculateTokenAmount = () => {
    if (priceData && amount) {
      const usdPrice = priceData.market_data.current_price.usd;
      return (amount / usdPrice).toFixed(2);
    }
    return 0;
  };

  return (
    <div className="app">
      <main className="app-main">
        {!visible && (
          <section className="intro-section">
            <div className="intro-content">
              <h2>Convert your USD to AKT effortlessly</h2>
              <p>Top up your AKT balance in 2 easy steps!</p>
              <div className="form-container">
                <div className="swap-box">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter USD amount"
                    className="amount-input"
                  />
                  <div className="token-amount">
                    <span className="usd-amount">{calculateTokenAmount() ? `$${amount}` : '$0'}</span>
                    <span className="token-icon">⇄</span>
                    {amount && priceData && (
                      <span className="usd-amount">$AKT {calculateTokenAmount()}</span>
                    )}
                  </div>
                </div>
                <button onClick={handleStart} className="start-button">
                  Start Conversion
                </button>
              </div>
            </div>
          </section>
        )}
        <section className="widget-section">
          {visible && (
            <div className="widget-container">
              <MoonPayBuyWidget
              className='moonpay-widget'
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
                <a href="/swap">
                  <button className="control-button">
                    Confirm
                  </button>
                </a>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
