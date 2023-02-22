import React, { useState } from 'react'
import styles from "./LeftView.module.css"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
const LeftView = ({data}) => {
  const navigate=useNavigate();
  const [toggle,setToggle]=useState(false)
  const dispatch=useDispatch();
  const buyNow=()=>
  {
    let obj={
      id:data.id,
      title:data.title,
      quantity:1,
      image:data.image,
      price:data.price
    }
    dispatch({type:"ADD_TO_CART",payload:obj});
    setToggle(true)
  }
  const goToCart=()=>
  {
   navigate("/cart")
  }
  const buyNow2=()=>
  {
    let obj={
      id:data.id,
      title:data.title,
      quantity:1,
      image:data.image,
      price:data.price
    }
    dispatch({type:"ADD_TO_CART",payload:obj});
    navigate("/cart")
  }
  return (
    <section className={styles["left-container"]}>
      <img className={styles["img"]} src={data.image} alt="" />
      <section className={styles["actions-container"]}>
         {!toggle ?<button className={styles["add-to-cart"]} onClick={buyNow}>add to cart</button>:<button className={styles["add-to-cart"]} onClick={goToCart}>go to cart</button>}
         <button className={styles["buy-now"]} onClick={buyNow2}>Buy now</button>
      </section>
    </section>
  )
}

export default LeftView
