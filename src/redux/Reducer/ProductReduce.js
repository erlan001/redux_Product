import { ADD_PRODUCT } from "../actionTypes";

const initiolState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};
export const readProduct = (state = initiolState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, product: [...state.product, action.payload] };
    }
    default: {
      return state;
    }
  }
};
