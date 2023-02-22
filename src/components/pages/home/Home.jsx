import React from 'react'
import CatelogCard from './extraComponets/catelogCard/CatelogCard';
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles["home"]}>
      <CatelogCard text="cloths" category="cloth" path="cloth"/>
      <CatelogCard text="electronics" category="electronics" path="electronics"/>
      <CatelogCard text="jewelery" category="jewelery" path="jewelery"/>
      
    </section>
  )
}

export default Home
