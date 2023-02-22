import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "./RightSignUp.module.css"
const RightSignUp = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    id:"",
    password:""
  })
  const changeHander=(e)=>
  {
    let {name,value}=e.target;
    setData({...data,[name]:value})
  }
  const subHandler=(e)=>
  {
    e.preventDefault();
    localStorage.setItem("Flipkartuser",JSON.stringify(data));
    setData({
      id:"",
      password:""
    });
   navigate("/");
  }
  return (
    <section className={styles["right-side"]}>
      <form action="" onSubmit={subHandler}>
        <input type="text" placeholder='Enter Name' className={styles["input-field"]} required name="id" value={data.id} onChange={changeHander} />
        <input type="password" placeholder='Enter Password' className={styles["input-field"]} required name="password" value={data.password} onChange={changeHander}/>
        <span className={styles["terms-condition"]}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</span>
         <button type='submit' className={styles["login-btn"]} >Sign Up</button>
      </form>
      <Link to="/login">Have Account? Log In</Link>
    </section>
  )
}

export default RightSignUp
