import React from "react";
import "./ProductReviews.scss";
import ReviewCard from "./ReviewCard/ReviewCard";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productreview">
      {productReviews.map((item, index) => (
        <ReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
