import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./ListCard.module.css"
const ListCard = ({path,img,title}) => {
  return (
    <Link  to={`/catProducts/${path}`} className={styles["card-container"]}>
      <img className={styles["img"]} src={img} alt="produc-image" />
      
      <p className={styles["title"]}>{title.slice(0,10)}...</p>
      <span className={styles["shop-now"]}>Shop now</span>
      <span className={styles["more"]}>more</span>
    </Link>
  )
}

export default ListCard
