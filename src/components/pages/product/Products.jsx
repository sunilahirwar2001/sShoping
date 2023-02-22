import React, { useEffect, useState } from 'react'
import Allproductcontainer from './extraComponets/Allproductcontainer';
import Filter from './extraComponets/Filter';
import { useSelector } from 'react-redux';
import styles from "./Product.module.css";
const Products = () => {
  let {allData,loaded}=useSelector((state)=>state);
  const [formData,setFormData]=useState({
    category:"all",
    price:"normal",
    color:"all"
  });
  
  
  const [myData,setMyData]=useState(allData);
  // console.log(myData)
  const [applyFilter,setApplyFilter]=useState(false);
  const [resetFilter,setResetFilter]=useState(false);
  function chnageFunction(name,value)
  {
    setFormData({...formData,[name]:value})
  }
   
  useEffect(()=> 
  {
    ;
    setFormData({
      category:"all",
      price:"normal",
      color:"all"
    });
    setMyData(()=>allData)
    
  },[resetFilter]);
  
  useEffect(()=>
  {
    if(loaded===true)
  {
    setMyData((old)=>allData)
  }
  },[loaded])
  
  useEffect(()=>
  {
    
    if(formData.category=="all")
    {
    //  console.log(allData)
      setMyData(allData);
      
    }
    else if(formData.category=="clothing")
    {
      // console.log("hello");
      setMyData(()=>
      {
        let temp=allData.filter((e)=>e.category.includes("cloth"));
        return temp
      });
      
    }
    else if(formData.category=="electronics")
    {
      setMyData(()=>
      {
        let temp=allData.filter((e)=>e.category.includes("electronics"));
        return temp
      });
      
    }
    else if(formData.category=="jewelery")
    {
      setMyData((old)=>
      {
        let temp=allData.filter((e)=>e.category.includes("jewelery"));
        return temp
      });
     
    }

    // for sorting by price
    if(formData.price=="normal")
    {
      setMyData((old)=>{
        // old.sort(()=>Math.random()-0.5);
        // return old
        let temp=allData.filter((e)=>e.category.includes((formData.category=="all"?"":formData.category)));
        return temp
      })
      
      return;
    }
    else if(formData.price=="high to low")
    {
      setMyData((old)=>
      {
        return allData.filter((e)=>e.category.includes((formData.category=="all"?"":formData.category))).sort((a,b)=>b.price-a.price);
        // let temp=old
      //  old.sort((a,b)=>b.price-a.price)
      //  return old
      })
      return;
    }
    else if(formData.price=="low to high")
    {
      setMyData((old)=>
      {
        return allData.filter((e)=>e.category.includes((formData.category=="all"?"":formData.category))).sort((a,b)=>a.price-b.price);
        // let temp=old
      //  old.sort((a,b)=>a.price-b.price)
      //  return old
      });
      return
    }
  },[applyFilter])
  return (
    <section className={styles["products-container"]}>
      <Filter color={formData.color}
      price={formData.price}
      category={formData.category} changeFunction={chnageFunction} setFilter={setApplyFilter}
      resetFilter={setResetFilter}/>
      <Allproductcontainer data={myData}  />
    </section>
  )
}

export default Products
