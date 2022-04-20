import { combineReducers } from "redux";
import { productsReducer,addproductsReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  addproduct:addproductsReducer,

});
export default reducers;