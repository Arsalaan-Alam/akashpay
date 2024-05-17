import logo from './logo.svg';
import './App.css';

import { MoonPayProvider } from '@moonpay/moonpay-react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';


function App() {

  return (
    <MoonPayProvider
            apiKey="pk_test_BUJfnSGvAbNifpCK3TxpIWEJz7Dm7rA"
            debug
        >
    <div className="App">
     <MoonPayBuyWidget
            variant="overlay"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="eth"
            visible
        />
        </div>
    </MoonPayProvider>
  );
}

export default App;
