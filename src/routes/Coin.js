import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import './Coin.css';

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>

        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {coin.image ? <img src={coin.image.small} alt='' /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/INR</p> : null}
            </div>
            <div className='coin-price'>
              {coin.market_data?.current_price ? (
                <h1>₹{coin.market_data.current_price.inr.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className='content'>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
                <td>{coin.market_data?.price_change_percentage_24h_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
                <td>{coin.market_data?.price_change_percentage_7d_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
                <td>{coin.market_data?.price_change_percentage_14d_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
                <td>{coin.market_data?.price_change_percentage_30d_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
                <td>{coin.market_data?.price_change_percentage_1y_in_currency?.inr !== undefined ? <p>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(1)}%</p> : <p>N/A</p>}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className='right'>
              <div className='row'>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>Circulating Supply</h4>
                {coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''.en),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
