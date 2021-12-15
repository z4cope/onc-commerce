import { combineReducers } from "redux";
import commerceReducer from "../actions/commerceActions/commerceReducer";
import commerceCartReducer from "../actions/commerceCartActions/commerceCartReducer";

const rootReducer = combineReducers({
  productsList: commerceReducer,
  cartList: commerceCartReducer,
});

export default rootReducer;
