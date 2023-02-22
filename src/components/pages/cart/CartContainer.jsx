import React from 'react'
import styles from "./CartContainer.module.css"
import {useSelector} from "react-redux"
import CartList from './extraComponents/CartList';
import PriceDetails from './extraComponents/PriceDetails';
import EmptyCart from './extraComponents/EmptyCart';
const CartContainer = () => {
    const {cart,cartValue} =useSelector((state)=>state);
    console.log(cartValue)
    console.log(cart)
  return (
    <section className={styles["cart-container"]}>
      <section className={styles["cart-holder"]}>
        {
            cart.map((e,ind)=><CartList data={e} key={ind} index={ind}/>)
        }
        {cart.length!==0 ?<PriceDetails cartValue={cartValue}/>:<EmptyCart/>}
        
      </section>
      
    </section>
  )
}

export default CartContainer
