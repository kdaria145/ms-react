import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {viewReducer} from './viewReducer'
import {orderReducer} from "./orderReducer";


export const rootReducer = combineReducers({
    products: productsReducer,
    view: viewReducer,
    order: orderReducer
})