import { FETCH_COMMERCE_PRODUCTS } from "./commerceActionType";
import { commerce } from "../../lib/commerce";

export const commerceAction = () => async (dispatch) => {
  const { data } = await commerce.products.list();
  dispatch({
    type: FETCH_COMMERCE_PRODUCTS,
    payload: { products: data },
  });
};
