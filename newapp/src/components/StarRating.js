import React, { useState } from "react";

const StarRating = () => {  
  const [rating, setRating]= useState(0);
  const [hover, setover] = useState(0);
  
  return (
  <div className="star-rating">
    {[...Array(5)].map((star, index)=>{
      index += 1;
      return(
        <button
        type="starbutton"
        key={index}
        className= {index <= (rating && hover) ? "on" : "off"}
        onClick= {() => setRating(index)}
        onMouseEnter = {() => setover(index)}
        onMouseLeave = {() => setover(rating)}
        onDoubleClick = {() => {
          setRating(0);
          setover(0);
        }}
        >
        <span className="star">&#9733;</span>
        </button>
      );
    })}
  </div>
  );
};

export default StarRating;