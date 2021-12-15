import { FETCH_COMMERCE_CART } from "./commerceCartActionType";

const initState = {
  cartList: {},
  itemList: [],
};

const commerceCartReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMERCE_CART:
      return {
        ...state,
        cartList: action.payload.cartList,
        itemList: action.payload.itemList,
      };
    default:
      return state;
  }
};

export default commerceCartReducer;
