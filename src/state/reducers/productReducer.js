export const productReducer=(state={product:["Nike Shoes"]},action)=>{
 if(action.type === 'ADD_PRODUCT'){
     return{
         ...state,
         product:[...action.data, ...state.product],
     }
 }
 if(action.type === "REMOVE_PRODUCT"){
   const newData =state.product.filter((item)=> item !== action.data)
    return{
         ...state,
         product: action.data,
     }
 }
return state ;
}