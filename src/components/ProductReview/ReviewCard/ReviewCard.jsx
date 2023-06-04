import React from "react";
import './ReviewCard.scss'

const ReviewCard = ({image,index,name,review,price}) => {
  return (
    <div className="reviewcard">
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ReviewCard;
