import {
    CHANGE_BILLING_ADDRESS_INFORMATION,
    CHANGE_CUSTOMER_INFORMATION, CHANGE_PAYMENT_INFORMATION,
    NEXT_PROGRESS_STEP,
    PREV_PROGRESS_STEP
} from "../types/types";

const initialState = {
    progressSteps: [
        {id: 1, label: "Customer information"},
        {id: 2, label: "Checkout"},
        {id: 3, label: "Billing address"}
    ],
    currentStep: 1,
    disableNextButton: false,
    disablePrevButton: true,
    orderInformation: {
        customer: {
            name: "",
            surname: ""
        },
        creditCard: {
            number: "",
            name: "",
            expiry: "",
            cvc: ""
        },
        billingAddress: {
            country: "",
            city: "",
            house: "",
            flat: ""
        }
    }
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PROGRESS_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case PREV_PROGRESS_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        case CHANGE_CUSTOMER_INFORMATION:
            return {
                ...state,
                orderInformation: {
                    ...state.orderInformation,
                    customer: {...state.orderInformation.customer, ...action.payload}
                }
            }
        case CHANGE_BILLING_ADDRESS_INFORMATION:
            return {
                ...state,
                orderInformation: {
                    ...state.orderInformation,
                    billingAddress: Object.assign(state.orderInformation.billingAddress, action.payload)
                }
            }
        case CHANGE_PAYMENT_INFORMATION:
            return {
                ...state,
                orderInformation: {
                    ...state.orderInformation,
                    creditCard: Object.assign(state.orderInformation.creditCard, action.payload)
                }
            }
        default:
            return state
    }
}