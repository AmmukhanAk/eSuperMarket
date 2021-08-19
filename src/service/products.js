import axios from "axios"
export const getProducts=()=>{
  let allProducts=[];
    axios
    .get("https://fakestoreapi.com/products")
   .then((res)=> (allProducts=[...res.data]))
   .catch((e)=> console.log("Error-",e));

   return allProducts;
};