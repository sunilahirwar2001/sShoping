import React, { useState } from 'react'
import styles from "./Pagination.module.css"
const Pagination = ({data,setNum}) => {
    const [active,setActive]=useState(1);
    const change=(e)=>
    {
      let {innerText}=e.target;
      setNum(Number(innerText)*10);
      setActive(+innerText)
    }
    const prev=()=>
    {
      setActive(old=>old-1) ;
      setNum(active*10); 
    }
    const next=()=>
    {
        setActive(old=>old+1) 
        setNum(active*10); 
    }
  return (
    <section className={styles["pagination-holder"]}>
      <button className={active==1?styles["disabled-prev"]:""} onClick={prev}>{"<<"}</button>
      {
        Array.from({length:Math.ceil(data.length/20)}).map((e,ind)=>
       {
        return <button style={{backgroundColor:(ind+1==active)?"gray":""}} onClick={change}>{ind+1}</button>
       })
      }
      <button className={active==Math.ceil(data.length/20)?styles["disabled-next"]:""} onClick={next}>{">>"}</button>
    </section>
  )
}

export default Pagination
