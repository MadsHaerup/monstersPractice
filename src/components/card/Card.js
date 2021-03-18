import React from 'react';
import './Card.scss';

export const Card = (props) => {
  return (
    <div className="cardContainer">
      <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}
