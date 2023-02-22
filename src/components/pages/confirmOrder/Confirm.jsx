import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Confirm.module.css"
const Confirm = () => {
  return (
    <section className={styles["confirm-holder"]}>
       <section className={styles["holder"]}>
          <h2>Hurray!</h2>
          <h3>Your Order has been succesfully placed</h3>
          <Link to="/">OK</Link>
       </section>
    </section>
  )
}

export default Confirm
