import axios from "axios"

export const getProducts= async()=>{
    const resp = await axios.get("https://fakestoreapi.com/products")
    resp.data


  
//     axios
//     .get("https://fakestoreapi.com/products")
//    .then((res)=>
//     ((allProducts=[...res.data]))
//    .catch((e)=> console.log("Error-",e))
// };