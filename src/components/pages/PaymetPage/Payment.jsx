import React from 'react'
import Address from './extraComponents/Address'
import styles from "./Payment.module.css"
import { useSelector } from 'react-redux'
const Payment = () => {
    const {cartValue}=useSelector(state=>state);
  return (
    <section className={styles["payment-container"]}>
       <div className={styles["container"]}>
        <h1 className={styles["p-head"]}>Secure Payment</h1>
        <div className={styles["price-container"]}>
            <h2>Total Price</h2>
            <h3>Rs:<span>{(cartValue+150+40).toFixed(2)}/-</span></h3>
            
        </div>
        <Address/>
       </div>
    </section>
  )
}

export default Payment
