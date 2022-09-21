import { combineReducers } from "redux";
import AddCartReducer from "./CartReducer";

const rootReducers = combineReducers({
//    FoodReducer : AddToCartReducer,
//    QuantityReducer : QuantityReducer,
        AddCartReducer : AddCartReducer
})

export default rootReducers;