import React from 'react'
import Card from './Card'
const Row = (props) => {
 return (
  <div className="container-row">
    {props.item.map((card, cardIndex ) => {
        return <Card key={cardIndex} type={card.type} id={card.key} card={cardIndex} row={props.row} flipped={`${card.flipped}`}/>;
      })}
  </div>
 )
}
export default Row;