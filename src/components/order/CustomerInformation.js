import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeCustomerInformation, nextProgressStep} from "../../store/products/actions/actions";

const CustomerInformation = () => {
    const dispatch = useDispatch();
    const customer = useSelector(state => state.order.orderInformation.customer);
    const [customerInformation, setCustomerInformation] = useState(customer);

    const submitHandler = () => {
        dispatch(nextProgressStep());
        dispatch(changeCustomerInformation(customerInformation));
    }

    const changeHandler = changedField => e => {
        setCustomerInformation({...customerInformation, [changedField]: e.target.value});
    }
    return (
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formName">
                <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={customerInformation.name}
                    onChange={changeHandler("name")}
                />
            </Form.Group>
            <Form.Group controlId="formSurname">
                <Form.Control
                    required
                    type="text"
                    placeholder="Surname"
                    value={customerInformation.surname}
                    onChange={changeHandler("surname")}
                />
            </Form.Group>
            <Button
                variant="warning"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    )
}
export default CustomerInformation;