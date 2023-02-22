import React, { useState } from 'react'
import styles from "./Allproductcontainer.module.css";
import Pagination from './Pagination';
import ProductCard from './ProductCard';
// import { useSelector } from 'react-redux';
const Allproductcontainer = ({data}) => {
  const [num,setNum]=useState(0);
  // const data=useSelector((state)=>state.allData)
  return (
   <> <section className={styles["allproduct-container"]}>
      {
        data.slice(num,num+20).map((e,ind)=>
        {
          return <ProductCard  key={ind} img={e.image} title={e.title} id={e.id} price={e.price}/>
        })
      }
      <Pagination data={data} setNum={setNum}/>
    </section>
    
    </>
  )
}

export default Allproductcontainer
