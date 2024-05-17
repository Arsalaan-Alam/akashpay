import React from 'react';
import './Swap.css';

function Swap() {
  return (
    <div className="swap-page">
      <iframe
        src="https://staging-leap-elements.web.app/v2/liquidity-view"
        title="Liquidity View"
        className="swap-iframe"
      ></iframe>
    </div>
  );
}

export default Swap;
