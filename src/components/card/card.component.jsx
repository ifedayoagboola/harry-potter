import React from 'react';

import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img
            src={`https://robohash.org/${props.hero.id}?set=set2&size=180x180`}
            alt="hero"
        />
        <h2>{props.hero.actor}</h2>
        AS
        <p><strong>{props.hero.name}</strong> </p>
    </div>
);
