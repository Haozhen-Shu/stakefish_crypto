import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./response.css";
import "./ExchangeDetails.css";


function ExchangeDetails () {
    const {id} =  useParams();
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

    const exchange = exchanges.find(exchange=>exchange.id == id);
    
    if (exchange) {
        return (
            <div className='exchange_detail_row'>
                <div className='exchange_detail'>
                    <img src={exchange.image} alt='crypto' className="exchange_detail_img"/>
                    <p className="exchange_detail_name">{exchange.name}</p>
                    <NavLink to="/" onClick={() => { window.location.href = "/"}}>Back</NavLink>
                </div>
                <div className="titles_contents">
                    <div className="exchange_detail_titles">
                        <div className="exchange_detail_country">Country:</div>
                        <div className="exchange_detail_rank">Trust Score Rank:</div>
                        <div className="exchange_detail_year">Year Established:</div>
                        <div className="exchange_detail_url">URL:</div>
                    </div>
                    <div className='exchange_detail_data'>
                        <div className='exchange_detail_country'>.{exchange.country}</div>
                        <div className='exchange_detail_rand'>.{exchange.trust_score_rank}</div>
                        <div className='exchange_detail_year'>
                            .{exchange.year_established}
                        </div>
                        <div className="exchange_detail_url">.{exchange.url}</div>
                    </div>
                </div>
                <div className="description">
                    <div className="exchange_detail_desc">Description:</div>
                    <p className="exchange_detail_desc">{exchange.description}</p>
                </div>
            </div>
        )
    }
}

export default ExchangeDetails;