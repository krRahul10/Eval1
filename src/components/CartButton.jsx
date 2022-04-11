
import React from 'react'
import { useState } from 'react';
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    let [count,setCount]=React.useState(0)
    const handleChange=(value)=>{
           setCount(count+value)
      
         }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
  <h1>{count}</h1>
      <button onClick={()=>handleChange(-1)}>-</button>
      {/* <p className="count-item">{count}</p> */}
      <button onClick={()=>handleChange(1)}>+</button>
  </div>
  </>;
};
export default CartButton

