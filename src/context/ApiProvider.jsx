import { createContext, useEffect, useState } from "react";
// import   axios from "axios"
import products from "../data/products"

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    
  const [data, setData] = useState([]);

   useEffect(()=>{
      setData(products)
    },[]);
    
  
  return (
    <ApiContext.Provider value={{data, setData}}>
      {children}
    </ApiContext.Provider>
  );
};