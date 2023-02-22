import React from 'react'
import LeftSignUp from './extraComponents/LeftSignUp';
import RightSignUp from './extraComponents/RightSignUp';
import styles from "./SignUp.module.css";
const SignUp = () => {
  return (
    <section className={styles["login-container"]}>
      <section className={styles["log-holder"]}>
       <LeftSignUp/>
       <RightSignUp/>
      </section>
    </section>
  )
}

export default SignUp
