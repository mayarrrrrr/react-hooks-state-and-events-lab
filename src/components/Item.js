import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const[addCart, setAddCart] = useState("Add to Cart")

  


  const appClass = addCart ? "" : "in-cart"

  const buttonClass = addCart ? "add" : "remove"

  const textCart = addCart ? "Add to Cart": "Remove From Cart"

  

  function shopCart(){
    setAddCart((addCart)=>!(addCart))
    
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={shopCart}className={buttonClass}>{textCart}</button>
    </li>
  );
}

export default Item;
