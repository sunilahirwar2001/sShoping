import React from 'react'
import { useNavigate } from 'react-router-dom'
import GooglePayButton from "@google-pay/button-react"
import {useSelector} from "react-redux";
import styles from "./Address.module.css"


const Address = () => {
  const {cartValue:price,cart}=useSelector((state)=>state);
  const navigate=useNavigate()
    
  return (
    <section className={styles["address-box"]}>
      <form action="post">
        <h2 className={styles["heading"]}>Shipping Details</h2>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Email Id *</label>  
          <input className={styles["second"]} required type="email" placeholder='Enter Your Email Address' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Mobile Number *</label>  
          <input className={styles["second"]} required type="text" placeholder='Enter Your Mobile' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Streed *</label>  
          <input className={styles["second"]} required type="text" placeholder='Enter Street' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Society / Village *</label>  
          <input className={styles["second"]} required type="text" placeholder='Enter Village/ Society' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Pin Code *</label>  
          <input className={styles["second"]} required maxLength="6" type="text" placeholder='Enter Pin Code' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>District *</label>  
          <input className={styles["second"]} maxLength="6" type="text" placeholder='Enter District' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>State *</label>  
          <input className={styles["second"]} required maxLength="6" type="text" placeholder='Enter State' />
        </div>
        <div className={styles["row-ud"]}></div>
        {/* <div className={styles["heading"]}>
            <h2>Card Details</h2>
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Card Number *</label>  
          <input className={styles["second"]} required maxLength="16" type="text" placeholder='Enter Card Number' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>Expiry Date*</label>  
          <input className={styles["second"]} required  type="date" placeholder='Enter Card Number' />
        </div>
        <div className={styles["row"]}>
          <label htmlFor="email" className={styles["first1"]}>CVV *</label>  
          <input className={styles["second"]} required maxLength="3" minLength="3"  type="password" placeholder='Enter CVV' />
        </div>
        <div className={styles["row-ud"]}></div> */}
        <div className={styles["action-controls"]}>
         <button type='button' form='none' className={styles["cancel"]} onClick={()=>navigate("/cart")}>Cancel Payment</button>
         {/* <button type='submit'  className={styles["confirm"]}> */}
         <GooglePayButton
  environment="TEST"
  paymentRequest={{
    
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: price+"",
      currencyCode: 'INR',
      countryCode: 'IN',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
    navigate("/confirm")
  }}
 
/>
         
        </div>
      </form>

    </section>
  )
}

export default Address
