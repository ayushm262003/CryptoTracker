import React from 'react';
import './Coins.css';

const CoinItem = (props) => {
    const coin = props.coins;

    return (
        <div className='coin-row'>
            <p>{coin.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={coin.image} alt='' />
                <p>{coin.symbol.toUpperCase()}</p>
            </div>
            <p>₹{coin.current_price?.toLocaleString() || 'N/A'}</p>
            <p>{coin.price_change_percentage_24h?.toFixed(2) || '0.00'}%</p>
            <p className='hide-mobile'>₹{coin.total_volume?.toLocaleString() || 'N/A'}</p>
            <p className='hide-mobile'>₹{coin.market_cap?.toLocaleString() || 'N/A'}</p>
        </div>
    );
}

export default CoinItem;
