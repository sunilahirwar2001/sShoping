import React from 'react'
import styles from "./CartList.module.css"
import {useDispatch} from "react-redux";
const CartList = ({data,index}) => {
   
    const dispatch=useDispatch();
    const incQuantity=()=>
    {
      dispatch({type:"ADD_TO_CART",payload:data});
    }
    const decQuantity=()=>
    {
       dispatch({type:"DEC_BY_ONE",payload:data}) 
    }
  return (
    <section className={styles["cart-list"]}>
      <div className={styles["img-container"]}>
         <img src={data.image} alt="" />
      </div>
      <div className={styles["product-details"]}>
        <h3 className={styles["title"]}>{data.title}</h3>
        <span className={styles["unit-price"]}>Unit Price<br/> Rs:{data.price}</span>
        <div className={styles["controls"]}>
            <span className={styles["quantity"]}>quantity</span>
            <div><button onClick={decQuantity} className={styles["inc"]} style={{pointerEvents:data.quantity==1?"none":"all",cursor:data.quantity==1?"notAllowed":"pointer"}}>-</button><span className={styles["quan"]}>{data.quantity}</span><button className={styles["dec"]} onClick={incQuantity}>+</button></div>
        </div>
      </div>
      <div className={styles["price-holder"]}>
        <span  onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:index})}} className={styles["remove-btn"]}>Remove <i class="fa-solid fa-circle-minus" id='fa-circle-minus'></i></span>
        <h2>Rs {(data.price *data.quantity).toFixed(2)}</h2>
        
      </div>
    </section>
  )
}

export default CartList
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
