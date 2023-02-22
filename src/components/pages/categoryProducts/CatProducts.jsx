import React, { useEffect, useState } from 'react'
import Allproductcontainer from './extraComponets/Allproductcontainer';
import Filter from './extraComponets/Filter';
import { useSelector } from 'react-redux';
import styles from "./CatProduct.module.css";
import {useParams} from "react-router-dom";
const CatProducts = () => {
  let {allData,loaded}=useSelector((state)=>state);
  const [formData,setFormData]=useState({
    price:"normal",
    color:"all"
  });
  
  const params=useParams();
  
  
  const [myData,setMyData]=useState([]);
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
      price:"normal",
      color:"all"
    });
    setMyData(()=>allData.filter((e)=>e.category.includes(params.type)))
    
  },[resetFilter]);
  useEffect(()=>
  {
    
    setMyData(()=>allData.filter((e)=>e.category.includes(params.type)));
    
  },[params])
  
  useEffect(()=>
  {
    if(loaded===true)
  {
    setMyData((old)=>allData.filter((e)=>e.category.includes(params.type)))
  }
  },[loaded])
  
  useEffect(()=>
  {
  

    // for sorting by price
    if(formData.price=="normal")
    {
      setMyData((old)=>{
       return allData.filter((e)=>e.category.includes(params.type));
       

      })
      
      return;
    }
    else if(formData.price=="high to low")
    {
      setMyData((old)=>
      {
        // return allData.filter((e)=>e.category.includes((formData.category=="all"?"":formData.category))).sort((a,b)=>b.price-a.price);
        return allData.filter((e)=>e.category.includes(params.type)).sort((a,b)=>b.price-a.price);
       
      })
      return;
    }
    else if(formData.price=="low to high")
    {
      setMyData((old)=>
      {
        // return allData.filter((e)=>e.category.includes((formData.category=="all"?"":formData.category))).sort((a,b)=>a.price-b.price);
        return allData.filter((e)=>e.category.includes(params.type)).sort((a,b)=>a.price-b.price);
       
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
      <Allproductcontainer data={myData} />
    </section>
  )
}

export default CatProducts
