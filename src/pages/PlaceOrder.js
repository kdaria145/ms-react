import React from "react";
import {Button, Container, ProgressBar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import MultipleForm from "../components/order/MultipleForm";
import {prevProgressStep} from "../store/products/actions/actions";

const PlaceOrder = () => {
    const progressSteps = useSelector(state => state.order.progressSteps);
    const currentStep = useSelector(state => state.order.currentStep);
    const dispatch = useDispatch();
    return (
        <Container>
            <h1>Place Order</h1>
            <ProgressBar>
                {progressSteps.map(step => {
                    return (
                        <ProgressBar
                            striped
                            className={step.id <= currentStep ? "progress_bar done" : "progress_bar"}
                            now={100 / 3}
                            key={step.id}
                            label={step.label}
                        />
                    )
                })}
            </ProgressBar>
            <Container className="checkout_form">
                <Button
                    className={{
                        "progress_bar_prev": true,
                        "hide": currentStep < 2 || currentStep > 3
                    }}
                    onClick={() => dispatch(prevProgressStep())}
                >&larr; Prev step</Button>
                <MultipleForm/>
            </Container>
        </Container>
    )
}

export default PlaceOrder;