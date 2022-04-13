import { useParams, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function ExchangeDetails () {
    const {id} =  useParams();
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

    const exchange = exchanges.find(exchange=>exchange.id == id)
    console.log(exchange)
    
    if (exchange) {
        return (
            <div className='coin-row'>
                <div className='coin'>
                    <img src={exchange.image} alt='crypto' />
                    <h1>{exchange.name}</h1>
                    <p className='coin-symbol'>{exchange.image}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>{exchange.country}</p>
                    <p className='coin-volume'>{exchange.trust_score_rank}</p>
                    <p className='coin-marketcap'>
                        {exchange.year_established}
                    </p>
                    <p>{exchange.url}</p>
                    <p>{exchange.description}</p>
                </div>
                <NavLink to="/" onClick={() => { window.location.href = "/"}}>Back</NavLink>
            </div>
        )
    }
}

export default ExchangeDetails;