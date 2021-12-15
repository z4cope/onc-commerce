import { FETCH_COMMERCE_CART } from "./commerceCartActionType";
import { commerce } from "../../lib/commerce";

export const commerceCartAction = (productId, quantity) => async (dispatch) => {
  const cartData = await commerce.cart.retrieve();
  const itemData = await commerce.cart.add(productId, quantity);
  dispatch({
    type: FETCH_COMMERCE_CART,
    payload: { cartList: cartData, itemList: itemData },
  });
};
