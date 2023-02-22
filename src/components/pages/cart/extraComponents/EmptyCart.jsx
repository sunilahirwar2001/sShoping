import React from 'react'
import styles from "./EmptyCart.module.css"
const EmptyCart = () => {
  return (
    <section className={styles["empty-container"]}>
      <h2>Cart is empty</h2>
    </section>
  )
}

export default EmptyCart
