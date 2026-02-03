import { useEffect, useState } from "react";
import './App.css'
import axios from "axios";
import clinerfun from "./cleanerfun";
function App() {

  const [count, setcount]=useState(1);
  const [products, setProducts]=useState([]);

  const getData = async (URL)=>{
    try{
      const {data:{products}}=await axios.get(URL);
      console.log(products);
      setProducts(products);
    }catch(err){
      return err;
    }
  }

  useEffect(()=>{
    //https://dummyjson.com/products
    //Call Api for useEffect
    const URL=`https://dummyjson.com/products`
    getData(URL);
  },[]);

  return (
    <>
    <clinerfun/>
      <button onClick={()=>setcount(count+1)}>Click-{count}</button>
      {
        products && products.length>0 && products.map(product=><p>{product.title}</p>)
      }
    </>
  );
}

export default App;
