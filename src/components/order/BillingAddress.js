import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import MapComponent from "./MapComponent";
import {changeBillingAddressInformation, nextProgressStep} from "../../store/products/actions/actions";
import {useDispatch, useSelector} from "react-redux";

const CustomerInformation = () => {
    const [hasFlat, setHasFlat] = useState(true);
    const billingAddress = useSelector(state => state.order.orderInformation.billingAddress);
    const dispatch = useDispatch();
    const [address, setAddress] = useState(billingAddress);

    const changeHandler = changedField => e => {
        setAddress({
            ...address,
            [changedField]: e.target.value
        });
    }

    const submitHandler = () => {
        dispatch(changeBillingAddressInformation(address));
        dispatch(nextProgressStep());
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formCountry">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Country"
                        value={address.country}
                        onChange={changeHandler("country")}
                    />
                </Form.Group>
                <Form.Group controlId="formCity">
                    <Form.Control
                        required
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={changeHandler("city")}
                    />
                </Form.Group>
                <Form.Group controlId="formStreet">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Street"
                        value={address.street}
                        onChange={changeHandler("street")}
                    />
                </Form.Group>
                <Form.Group controlId="formHouse">
                    <Form.Control
                        required
                        type="text"
                        placeholder="House"
                        value={address.house}
                        onChange={changeHandler("house")}
                    />
                </Form.Group>
                <Form.Group controlId="formFlat">
                    <Form.Control
                        required={hasFlat}
                        type="text"
                        placeholder="Flat"
                        onChange={changeHandler("flat")}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="There are no apartments in my house"
                        onChange={() => setHasFlat(!hasFlat)}
                    />
                </Form.Group>
                <Button
                    variant="warning"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>

            <h4>Select an address on the map</h4>
            <MapComponent setAddress={setAddress}/>
        </Container>

    )
}
export default CustomerInformation;