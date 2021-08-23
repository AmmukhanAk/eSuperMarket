// import axios from "axios"

// export const getProducts= async()=>{

//     const resp = await axios.get("https://fakestoreapi.com/products");
//      return resp.data
// };



import axios from "axios";

export const getProducts = async () => {
  const resp = await axios.get("https://fakestoreapi.com/products");
  return resp.data;
};