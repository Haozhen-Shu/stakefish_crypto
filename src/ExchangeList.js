import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Exchange from './Exchange';

function ExchangeList () {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/exchanges?per_page=10'
            )
            .then(res => {
                setExchanges(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>CryptoCurrency Exchanges Records</h1>
            </div>
            {exchanges.map(exchange => {
                return (
                    <Exchange
                        key={exchange.id}
                        id={exchange.id}
                        name={exchange.name}
                        country={exchange.country}
                        image={exchange.image}
                        url={exchange.url}
                        trust_score_rank={exchange.trust_score_rank}
                    />
                );
            })}
        </div>
    );
}

export default ExchangeList;
