import React from "react";

const Card = ({cart}) => {
  return (
    <div>
      <h3>order summary in Card</h3>
      <h2>Selected Items: {cart.length}</h2>
    </div>
  );
};

export default Card;