import React from 'react'
import styles from "./LeftSignUp.module.css"
const LeftSignUp = () => {
  return (
    <section className={styles["left-side"]}>
      <h2 className={styles["login-text"]}>Sign Up</h2>
      <div className={styles["text"]}>
        get access to your wishlists,orders and recommendation
      </div>
      {/* <div className={styles["img-holder"]}>
        <img src="" alt="" />
      </div> */}
    </section>
  )
}

export default LeftSignUp
