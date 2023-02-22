import React, { useEffect, useState } from "react";
import styles from "./RightView.module.css";

const RightView = ({data}) => {
    const [show,setShow]=useState(false);
    const toggle=()=>
    {
       setShow(!show) ;
    }
  return (
    <section className={styles["right-container"]}>
      <section className={styles["brand-name"]}>Flipkar SmartBuy</section>
      <h3 className={styles["title"]}>{data.title}</h3>
      <section className={styles["special-offer"]}>Special offer</section>
      <section className={styles["price-holder"]}>
        <h2>Rs: {data.price}</h2>
        <span className={styles["actual-price"]}>Rs4000</span>
        <span className={styles["offer"]}>
          {Math.ceil(Math.random() * 100)}% Off
        </span>
      </section>
      <section className={styles["rating-holder"]}>
        <span className={styles["rate"]}>
          {data.rating.rate} <i className="fa-sharp fa-solid fa-star" id={styles["star"]}></i>
        </span>
        <span className={styles["rating-count"]}>
          23 ratings and 123 reviews
        </span>
        <img
          className={styles["assured-img"]}
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
          alt="flipkar Assured"
        />
      </section>
      <h3>Available Offers</h3>
      <section className={styles["offer-holder"]}>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Special Price Get extra 48% off (price inclusive of cashback/coupon) <span className={styles["condition"]}></span></p>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Partner Offer Purchase now & get a surprise cashback coupon for January / February 2023 <span className={styles["condition"]}></span></p>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000* <span className={styles["condition"]}></span></p>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> Combo Offer Buy any 1 @MRP, get second freeSee all products<span className={styles["condition"]}></span></p>
       {/* <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> <span className={styles["condition"]}></span></p> */}
     
      </section>
      <section className={styles["below-offer"]}>
        <div className={styles["first"]}>
            <img className="" styles={{width:"50px",height:"40px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="location" /> Deliver to
        </div>
        <div className={styles["second"]}>
            <span className={styles["services"]}>Services</span>
            <span className={styles["cod"]}>Cash on Delivery Available</span>
        </div>
      </section>
      <section className={styles["input-box"]}>
        <div className={styles["box"]}>
            <input type="text" placeholder="Enter Delivery Pincode"/><button>Check</button>
        </div>
      </section>
      <section className={styles["extra"]}>
            <h4>Delivery by26 Jan, Thursday</h4>
            <span>if ordered today</span>
      </section>
      <img  className={styles["super-coin-img"]}src="data:image/jpeg;base64,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" alt="" />
      <section className={styles["description"]}>
        <div className={styles["toggle"]} onClick={toggle}>
           <h3>Product Description</h3> {!show ?<i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>} 
        </div>
       {show && <p> {data.description}
        </p> }
      </section>
    </section>
  );
};

export default RightView;
