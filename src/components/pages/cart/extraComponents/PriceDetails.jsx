import React from 'react'
import styles from "./PriceDetails.module.css"
import { Link,useNavigate } from 'react-router-dom'
const PriceDetails = ({cartValue}) => {
  const navigate=useNavigate();
  const clickHandler=()=>
  {
    let temp=localStorage.getItem("Flipkartuser");
    console.log(temp)
    if(!temp)
    {
      navigate("/login")   
    }
    else
    {
      navigate("/payment")
    }
  }
  return (
    <section className={styles["price-details"]}>
      <h2 className={styles["price-heading"]}>Price Details</h2>
      <hr />
       <div className={styles["row"]}>
        <h3>Sub Total</h3>
        <h3>Rs:{cartValue}</h3>
       </div>
    
      
       <div className={styles["row"]}>
        <h3>Taxas <span style={{color:"Green"}}>(GST)</span></h3>
        <h3 ><span style={{color:"green"}}>+150</span></h3>
       </div>
       <div className={styles["row"]}>
        <h3>Delivery Charges</h3>
        <h3><span style={{color:"green"}}>+40</span></h3>
       </div>
       <div className={styles["row"]}>
        <h3>Grand Total</h3>
        <h3>Rs<span style={{color:"green"}}>{(cartValue+150+40).toFixed(2)}</span></h3>
       </div>
       <hr />
       <div className={styles["row-payment"]}>
        <button onClick={clickHandler}>Proceed to payment</button>
       </div>
       
    </section>
  )
}

export default PriceDetails
