import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Exchange.css';

const Exchange = ({id, name, country,image, url, trust_score_rank }) => {

    return (
        <div className='coin-container'  >
            <NavLink className='coin-row' to={`/${id}`} onClick={()=>{window.location.href=`/${id}`}}>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{image}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>{country}</p>
                    <p className='coin-volume'>{url}</p>
                    <p className='coin-marketcap'>
                       {trust_score_rank}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default Exchange;