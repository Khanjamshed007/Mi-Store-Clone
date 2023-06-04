import React from 'react';
import './HotItemCard.scss'

const HotItemCard = ({image,index,name,price}) => {
  return (
    <div className='itemcard'>
        <img src={image} alt={`${index} Product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard