import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
  const starNumber = Math.floor(Number(props.avgRating)) || 0;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      {/* Full Star Rating */}
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
        />
      ))}
      {/* Outline of Star/Empty Star Rating */}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
