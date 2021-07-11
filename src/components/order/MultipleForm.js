import React from "react";
import CustomerInformation from "./CustomerInformation";
import {useDispatch, useSelector} from "react-redux";
import Checkout from "./Checkout";
import BillingAddress from "./BillingAddress";
import {Link} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import {clearCart} from "../../store/products/actions/actions";

const MultipleForm = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector(state => state.order.currentStep)
    const customer = useSelector(state => state.order.orderInformation.customer);
    if (currentStep === 1) {
        return (
            <CustomerInformation/>
        )
    } else if (currentStep === 2) {
        return (
            <Checkout/>
        )
    } else if (currentStep === 3) {
        return (
            <BillingAddress/>
        )
    } else if (currentStep === 4) {
        return (
            <Container>
                <h1>{customer.name}, thank you for the order!</h1>
                <Nav.Link as={Link} to="/" onClick={(e) => dispatch(clearCart())}>To catalog</Nav.Link>
            </Container>
        )
    }
}

export default MultipleForm