import {
    ADD_TO_CART,
    CHANGE_CURRENT_CATEGORY,
    CLEAR_CART,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    REMOVE_FROM_CART
} from "../types/types";

const initialState = {
    products: [],
    filteredProducts: [],
    cart: [],
    categories: ["all", "'men's clothing'", "'women's clothing'", "jewelery", "electronics"],
    currentCategory: "all"
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, products: action.payload, filteredProducts: action.payload}
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.includes(action.payload) ? state.cart : state.cart.concat([action.payload])
            }
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(p => p.id !== action.payload)}
        case CLEAR_CART:
            return {...state, cart: []}
        case CHANGE_CURRENT_CATEGORY:
            return {...state, currentCategory: action.payload}
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(p => state.currentCategory === "all" ? true : p.category === state.currentCategory)
            }
        default:
            return state
    }
}