import React, {useContext} from 'react'
import BoardContext from '../context/BoardContext';


const Card = ({type, card, row, flipped,id}) => {
 const context = useContext(BoardContext), {backSideCard, counter, disabled} = context;

 const handleClick = () => counter(row,card,type,id)

 return (
  <div className={flipped === 'true' ? 'container-card front' :  'container-card back'} flipped={flipped} style={flipped === 'true' ? {background: `center / cover no-repeat url(${process.env.PUBLIC_URL + `/dist/card/${type}.png`})`} : {background: `center / cover no-repeat url(${`${backSideCard}`})`}} onClick={disabled ? null : handleClick}>
   
  </div>
 )
}
export default Card;