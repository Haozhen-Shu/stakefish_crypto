import React from "react";
import { NavLink} from "react-router-dom";
import "./Exchange.css";
import "./response.css";

const Exchange = ({id, name, country,image, url, trust_score_rank }) => {

    return (
            <NavLink className='exchange_row' to={`/${id}`} onClick={()=>{window.location.href=`/${id}`}}>
                    <img src={image} alt='crypto' className="exchange_img"/>
                    <p className="exchange_name">{name}</p>
                    <p className='exchange_country'>{country}</p>
                    <p className='exchange_url'>{url}</p>
                    <p className='exchange_rank'>
                       {trust_score_rank}
                    </p>
            </NavLink>
    );
};

export default Exchange;