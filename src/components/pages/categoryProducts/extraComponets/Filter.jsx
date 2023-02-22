import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { colors } from "./color";
const Filter = ({color,price,category,changeFunction,setFilter,resetFilter}) => {
  
const changeHandler=(e)=>
{
  const {name,value}=e.target;
  changeFunction(name,value)
}
  return (
    <section className={styles["filter-container"]}>
      
        <form className={styles["box"]} method="Post" onSubmit={(e)=>{e.preventDefault();setFilter(old=>!old)}}>
          <div className={styles["row"]}>
            <label className={styles["first-child"]} htmlFor="">
              category
            </label>
            <select className={styles["last-child"]} name="category" defaultValue={category} onChange={changeHandler} id="disabled" >
              {/* <option value="all">All</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option> */}
              
            </select>
          </div>
          <div className={styles["row"]}>
            <label className={styles["first-child"]} htmlFor="">
              Price
            </label>
            <select className={styles["last-child"]} name="price" defaultValue={price} onChange={changeHandler}>
              <option value="normal">Normal</option>
              <option value="high to low">High to Low</option>
              <option value="low to high">Low to High</option>
            </select>
          </div>
          <div className={styles["row"]}>
            <label className={styles["first-child"]} htmlFor="">
              Color
            </label>
            <select className={styles["last-child"]} name="color" defaultValue={color} onChange={changeHandler}>
              <option value="All">All</option>
              {Object.entries(colors).map((e, i) => {
                
                return (
                  <>
                    <option key={i} value={e[1]}>
                      {e[0]}{" "}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className={styles["row"]}>
            <button type="reset" className={styles["clear"]} htmlFor="" onClick={()=>resetFilter(old=>!old)}>
              Clear Filter
            </button>
            <button type="submit" className={styles["apply"]} >
              Apply Filters
            </button>
          </div>
        </form>
      
    </section>
  );
};

export default Filter;
