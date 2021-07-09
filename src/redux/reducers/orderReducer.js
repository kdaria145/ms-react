import {
    CHANGE_BILLING_ADDRESS_INFORMATION,
    CHANGE_CUSTOMER_INFORMATION, CHANGE_PAYMENT_INFORMATION,
    NEXT_PROGRESS_STEP,
    PREV_PROGRESS_STEP
} from "../types";

const initialState = {
    progressSteps: [
        {step: 1, label: 'Customer information', done: true},
        {step: 2, label: 'Checkout', done: false},
        {step: 3, label: 'Billing address', done: false}
    ],
    currentStep: 1,
    disableNextButton: false,
    disablePrevButton: true,
    orderInformation: {
        customer: {},
        creditCard: {},
        billingAddress: {}
    }
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_PROGRESS_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1,
                progressSteps: state.progressSteps.map(step => {
                    if (step.step === (state.currentStep + 1)) {
                        step.done = true
                    }
                    return step
                })
            }
        case PREV_PROGRESS_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1,
                progressSteps: state.progressSteps.map(step => {
                    if (step.step === (state.currentStep)) {
                        step.done = false
                    }
                    return step
                })
            }
        case CHANGE_CUSTOMER_INFORMATION:
            return {
                ...state,
                orderInformation: {
                    ...state.orderInformation,
                    customer: Object.assign(state.orderInformation.customer, action.payload)
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