import React, { useEffect, useState } from 'react'
import LeftView from './extraComponents/LeftView'
import RightView from './extraComponents/RightView'
import styles from "./ViewProduct.module.css"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ViewProduct = () => {
  const [data,setData]=useState({

  })
  const {allData}=useSelector((state)=>state)
  const params=useParams();
  useEffect(()=>
  {
   let search=allData.filter((e)=>e.id==params.id);
   setData(search[0]);
  },[params])
  console.log(data)
  return (
    <section className={styles["product-view-conatiner"]}>
      <section className={styles["product-container"]}>
        <LeftView data={data}/>
        <RightView data={data}/>
      </section>
    </section>
  )
}

export default ViewProduct
