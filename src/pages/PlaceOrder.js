import React from "react";
import {Button, Container, ProgressBar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import MultipleForm from "../components/order/MultipleForm";
import {prevProgressStep} from "../redux/actions";

function ShoppingCart() {
    const progressSteps = useSelector(state => state.order.progressSteps)
    const currentStep = useSelector(state => state.order.currentStep)
    const dispatch = useDispatch()
    return (
        <Container>
            <h1>Place Order</h1>
            <ProgressBar>
                {progressSteps.map(step => {
                    return (
                        <ProgressBar
                            striped
                            now={100 / 3}
                            key={step.step}
                            label={step.label}
                            style={{
                                background: step.done ? '#ffc107' : '#eeee',
                                color: '#000'
                            }}
                        />
                    )
                })}
            </ProgressBar>
            <Container style={{paddingTop: '50px'}}>
                <Button
                    onClick={() => dispatch(prevProgressStep())}
                    style={{
                        display: currentStep < 2 || currentStep >3 ? 'none' : 'inherit',
                        background: 'transparent',
                        color: '#000',
                        border: 'none'
                    }}
                >&larr; Prev step</Button>
                <MultipleForm/>
            </Container>
        </Container>
    )
}

export default ShoppingCart