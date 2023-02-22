import React from 'react'
import styles from "./ProductCard.module.css"
import {Link} from "react-router-dom";
const ProductCard = ({img,title,id,price}) => {
  return (
    <Link to={`/viewproducts/${id}`} className={styles["card-container"]}>
      <img src={img} alt="product image"  className={styles["product-img"]}/>
      <h3 className={styles["price"]}>Rs: {price}</h3>
      <p className={styles["title"]}>{title.slice(0,25)}</p>
      <span className={styles["offer"]}>offer {Math.ceil(Math.random() * 100)} % Off</span>
      <button className={styles["add-to-cart-btn"]} id={id}>BUY NOW</button>
    </Link>
  )
}

export default ProductCard
