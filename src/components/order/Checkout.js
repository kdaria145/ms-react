import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {useDispatch, useSelector} from "react-redux";
import {changePaymentInformation, nextProgressStep} from "../../store/products/actions/actions";
import InputMask from "react-input-mask";

const Checkout = () => {
    const dispatch = useDispatch();
    const creditCard = useSelector(state => state.order.orderInformation.creditCard);
    const [creditCardState, setCreditCardState] = useState(creditCard);

    const formatterCartNumber = (e) => {
        setCreditCardState({...creditCardState, number: e.target.value.trim()});
    }

    const changeHandler = changedField => e => {
        setCreditCardState({...creditCardState, [changedField]: e.target.value});
    }

    const submitHandler = () => {
        dispatch(nextProgressStep());
        dispatch(changePaymentInformation(creditCardState));
    }

    return (
        <Container>
            <Cards
                cvc={creditCardState.cvc || ""}
                expiry={creditCardState.expiry || ""}
                name={creditCardState.name || ""}
                number={creditCardState.number || ""}
            />
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formNumber">
                    <Form.Control
                        required
                        as={InputMask}
                        type="text"
                        mask="9999 9999 9999 9999"
                        maskChar={null}
                        name="number"
                        placeholder="Card Number"
                        value={creditCardState.number}
                        onChange={formatterCartNumber}
                    />
                </Form.Group>
                <Form.Group controlId="formName">
                    <Form.Control
                        required
                        type="text"
                        name="name"
                        placeholder="Card Holders"
                        value={creditCardState.name}
                        onChange={changeHandler("name")}
                    />
                </Form.Group>
                <Form.Group controlId="formExpiry">
                    <Form.Control
                        required
                        as={InputMask}
                        mask="99/99"
                        type="text"
                        name="number"
                        placeholder="Expiration Date"
                        value={creditCardState.expiry}
                        onChange={changeHandler("expiry")}
                    />
                </Form.Group>
                <Form.Group controlId="formCVC">
                    <Form.Control
                        required
                        as={InputMask}
                        mask="999"
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        value={creditCardState.cvc}
                        onChange={changeHandler("cvc")}
                    />
                </Form.Group>

                <Button
                    variant="warning"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default Checkout;