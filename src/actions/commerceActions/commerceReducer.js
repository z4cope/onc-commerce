import { FETCH_COMMERCE_PRODUCTS } from "./commerceActionType";

const initState = {
  products: [],
};

const commerceReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMERCE_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default commerceReducer;
