export const productReducer = (state = { product: [] }, action) => {
    if (action.type === "ADD_PRODUCT") {
      return {
        ...state,
        product: [...action.data],
      };
    }
    if (action.type === "REMOVE_PRODUCT") {
      const newData = state.product.filter((item) => item !== action.data);
      return {
        ...state,
        product: newData,
      };
    }
    return state;
  };