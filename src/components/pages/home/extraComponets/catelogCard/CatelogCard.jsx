import React from 'react'
import styles from "./CatelogCard.module.css"
import ListCard from './ListCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const CatelogCard = ({text,category,path}) => {
  const list=useSelector((state)=>state.allData)
  return (
    <>
      <section className={styles["sec1"]}>
        <header className={styles["header"]}>
            <section className={styles["header-left"]}><h2>Top deals on {text}</h2>
            <span>Explore Now</span>
            </section>
            <Link to={`/catProducts/${path}`}  className={styles["header-right","header-btn"]}>view all</Link>
            
        </header>
        <hr/>
        <section className={styles["lists"]}>
          {/* <ListCard path={path}/>
          <ListCard path={path}/>
          <ListCard path={path}/>
          <ListCard path={path}/>
          <ListCard path={path}/> */}
          {
            list.filter((e)=>e.category.includes(category)).slice(0,5).map((e,ind)=>
            {
              return <ListCard path={path} img={e.image} title={e.title}  key={ind}/>
            })
          }
         
          
          
        </section>
      </section>
     
    </>
  )
}

export default CatelogCard
