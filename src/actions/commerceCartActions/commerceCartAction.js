import { FETCH_COMMERCE_CART } from "./commerceCartActionType";
import { commerce } from "../../lib/commerce";

export const commerceCartAction = (productId, quantity) => async (dispatch) => {
  const cartData = await commerce.cart.retrieve();

  dispatch({
    type: FETCH_COMMERCE_CART,
    payload: { cartList: cartData, itemList: itemData },
  });
};
