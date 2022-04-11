import React from "react"
import data from '../data.json'
 import style from './My.module.css'
  import"../App.css"
import CartButton from "./CartButton"



const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            
               {data.map(({id,imgURL,mrp,sellingPrice,title})=>{
                   return <div className={style.main}>
                       <img src={imgURL}/>
                       <h3>{title}</h3>
                       <div className={style.c}>
                           <h4>{sellingPrice}</h4>
                           <s>{mrp}</s>
                           {/* <button style={{height:"50px",width:"100px"}}>{CartButton}cart</button> */}
                           <CartButton/>
                           </div>
                       </div>
               })}
            
        </div>
        </>
    )
}
export default GroceryDetails