import React from 'react';
import './StarProducts.scss'

const StarProducts = ({star}) => {
  return (
    <div className='starproduct'>
        <div className='first'>
            <a href={star[0].url}><img src={star[0].image} alt="1st Product" /></a>
        </div>
        <div className='second'>
        <a href={star[0].url}><img src={star[1].image} alt="2nd Product" /></a>
        <a href={star[0].url}><img src={star[2].image} alt="3rd Product" /></a>
        <a href={star[0].url}><img src={star[3].image} alt="4th Product" /></a>
        </div>
    </div>
  )
}

export default StarProducts