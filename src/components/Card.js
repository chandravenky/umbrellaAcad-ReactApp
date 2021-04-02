import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
         <div className = 'card tc bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5'>
            <img className = "siblingimg" alt  = {props.number} src = {`/images/${props.number}.PNG` }></img>
            <div>
                <h2>{props.number}</h2>
                <p>{props.nickname}</p>
                <p>{props.fullname}</p>
                <p>{props.email}</p>
            </div>
        </div>
        
    );
}

export default Card;

