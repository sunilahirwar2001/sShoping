import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate=useNavigate();
  const [val,setVal]=useState("");
  // const [name,setName]=useState(null);
  const {cart}=useSelector(state=>state);
  let name=localStorage.getItem("Flipkartuser");
  const push=()=>
  {
    if(val.trim()==="")
    {

    }
    else
    {
      navigate(`/CatProducts/${val}`);
    }
    
    
  }

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["navbar"]}>
        <section className={styles["logo"]}>
          <Link to="/">Flipkart</Link>
        </section>
        <section className={styles["search"]}>
          <div className={styles["search-container"]}>
            <input
              type="text"
              placeholder="Search here..."
              className={styles["input"]}
              value={val}
              onChange={(e)=>setVal(e.target.value)}
            />
            <a className={styles["search-btn"]} onClick={push}>
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </section>
        <section className={styles["info"]}>
         { name ? <span className={styles["name"]}>{JSON.parse(name).id}</span>:
          <Link  to="login" className={styles["name"]}>Log In</Link>}
          <div className={styles["more"]}>
            <div className={styles["mores"]}>
              <span>more </span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            {
              <ul className={styles["box"]}>
                <li>
                  <Link to="/allproducts">All Products</Link>
                </li>
                <li>
                  <Link to="/cart">My Orders</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">Wishlists</Link>
                </li>
                <li>
                  <Link to="/">log out</Link>
                </li>
            
              </ul>
            }
          </div>
        </section>
        <section className={styles["cart"]}>
          <Link to="/cart">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <span className={styles["cart-count"]}>{cart.length}</span>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
