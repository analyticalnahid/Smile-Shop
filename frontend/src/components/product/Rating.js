import React from "react";

function Rating({ value, text, color }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass =
      value >= i
        ? "fas fa-star"
        : value >= i - 0.5
        ? "fas fa-star-half-alt"
        : "far fa-star";
    stars.push(
      <span key={i}>
        <i style={{ color }} className={starClass}></i>
      </span>
    );
  }

  return (
    <div className="rating">
      {stars}
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
