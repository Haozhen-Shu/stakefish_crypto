import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExchangeList.css";
import Exchange from "./Exchange";
import "./response.css";

function ExchangeList () {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/exchanges?per_page=10"
            )
            .then(res => {
                setExchanges(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className='exchange-app'>
            <div className="exchange_head">
            <p className='exchange-text'>CryptoCurrency Exchanges Records</p>
            </div>
            <div className="list_container">
                <div className="list_titles">
                    <div className="list_logo">Logo</div>
                    <div className="list_name">Name</div>
                    <div className="list_country">Country</div>
                    <div className="list_url">URL</div>
                    <div className="list_rank">Trust Score Rank</div>
                </div>

                <div className="exchange_bag">
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
            </div>
        </div>
    );
}

export default ExchangeList;
