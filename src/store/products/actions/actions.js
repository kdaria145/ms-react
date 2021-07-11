import {
    ADD_TO_CART,
    CHANGE_CURRENT_CATEGORY,
    NEXT_PROGRESS_STEP,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    HIDE_LOADER,
    REMOVE_FROM_CART,
    SHOW_LOADER,
    PREV_PROGRESS_STEP,
    CHANGE_CUSTOMER_INFORMATION,
    CHANGE_BILLING_ADDRESS_INFORMATION,
    CHANGE_PAYMENT_INFORMATION, CLEAR_CART
} from "../types/types";

export function fetchProducts() {
    return async dispatch => {
        dispatch({type: SHOW_LOADER})
        const response = await fetch("https://fakestoreapi.com/products")
        const json = await response.json()
        dispatch({type: FETCH_PRODUCTS, payload: json})
        dispatch({type: HIDE_LOADER})
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(productId) {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

export function changeCurrentCategory(category) {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        payload: category
    }
}

export function filterProducts() {
    return {
        type: FILTER_PRODUCTS
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function nextProgressStep() {
    return {
        type: NEXT_PROGRESS_STEP
    }
}

export function prevProgressStep() {
    return {
        type: PREV_PROGRESS_STEP
    }
}

export function changeCustomerInformation(value) {
    return {
        type: CHANGE_CUSTOMER_INFORMATION,
        payload: value
    }
}

export function changeBillingAddressInformation(value) {
    return {
        type: CHANGE_BILLING_ADDRESS_INFORMATION,
        payload: value
    }
}

export function changePaymentInformation(value) {
    return {
        type: CHANGE_PAYMENT_INFORMATION,
        payload: value
    }
}


