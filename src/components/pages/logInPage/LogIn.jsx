import React from 'react'
import LeftLogIn from './extraComponents/LeftLogIn';
import RightLogIn from './extraComponents/RightLogIn';
import styles from "./LogIn.module.css";
const LogIn = () => {
  return (
    <section className={styles["login-container"]}>
      <section className={styles["log-holder"]}>
       <LeftLogIn/>
       <RightLogIn/>
      </section>
    </section>
  )
}

export default LogIn
