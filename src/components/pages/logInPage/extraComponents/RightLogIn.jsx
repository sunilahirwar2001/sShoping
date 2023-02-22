import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from "./RightLogIn.module.css"
const RightLogIn = () => {
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
    let item=JSON.parse(localStorage.getItem("Flipkartuser"));
    if(item)
    {
      if(item.id==data.id && item.password==data.password)
      {
        setData({
          id:"",
          password:""
        });
       navigate("/");
      }
      else
      {
        alert("Wrong id or password");
      }
    }
    else
    {
      alert("you are not registered")
    }
  
   
  }
  
  return (
    <section className={styles["right-side"]} >
      <form action="" onSubmit={subHandler}>
        <input type="text" placeholder='Enter Username' className={styles["input-field"]} required name="id" value={data.id} onChange={changeHander} />
        <input type="password" placeholder='Enter Password' className={styles["input-field"]} required  name="password" value={data.password} onChange={changeHander}/>
        <span className={styles["terms-condition"]}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</span>
         <button type='submit' className={styles["login-btn"]} >Log In</button>
      </form>
      <Link to="/signup">New to Flipkart? Create an account</Link>
    </section>
  )
}

export default RightLogIn
