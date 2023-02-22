import React, { useEffect } from 'react'
import '../styles/App.css';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import { useDispatch,useSelector } from 'react-redux';
import Products from './pages/product/Products';
import ViewProduct from './pages/ProductView/ViewProduct';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatProducts from './pages/categoryProducts/CatProducts';
import CartContainer from './pages/cart/CartContainer';
import LogIn from './pages/logInPage/LogIn';
import SignUp from './pages/signUpPage/SignUp';
import Payment from './pages/PaymetPage/Payment';
import Confirm from './pages/confirmOrder/Confirm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/allproducts",
    element:<Products/>
  },
  {
   path:"catProducts/:type",
   element:<CatProducts/>
  },
  {
    path:"/viewproducts/:id",
    element:<ViewProduct/>
  },
  {
    path:"/cart",
    element:<CartContainer/>
  }
]);
const App = () => {
  const data=useSelector((state)=>state);
  const Dispatch=useDispatch();
  // console.log(data)
useEffect(()=>
{
  (async function()
  {
    let data=await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
    let ans=await data.json();
    // console.log(ans)
    Dispatch({type:"LOAD_FIRST",payload:[...ans,...ans,...ans]})
    
  })();
},[])

  return ( 
    // <div id="main">
      <><BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path="/allproducts" element={<Products/>}/>
      <Route exact path="/viewproducts/:id" element={<ViewProduct/>}/>
      <Route exact path="/catProducts/:type" element={<CatProducts/>}/>
      <Route exact path="/cart" element={<CartContainer/>}/>
      <Route exact path="/login" element={<LogIn/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/confirm" element={<Confirm/>}/>
      </Routes>
      </BrowserRouter></>

      // <>
      // <Navbar/>
      // <RouterProvider router={router} />
      // </>
    // {/* </div> */}
  )
}


export default App;
