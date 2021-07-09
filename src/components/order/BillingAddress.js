import React, {useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import MapComponent from "./MapComponent";
import {changeBillingAddressInformation, nextProgressStep} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const CustomerInformation = () => {
    const [address, setAddress] = useState({});
    const [hasFlat, setHasFlat] = useState(true);
    const billingAddress = useSelector(state => state.order.orderInformation.billingAddress);
    const dispatch = useDispatch();

    const changeHandler = (e, changedField) => {
        setAddress({...address, [changedField]: e.target.value})
    }

    const submitHandler = (e) => {
        dispatch(changeBillingAddressInformation(address))
        dispatch(nextProgressStep())
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formCountry">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Country"
                        value={address.country ? address.country :
                            billingAddress.country ? billingAddress.country : ''}
                        onChange={(e) => changeHandler(e, 'country')}
                    />
                </Form.Group>
                <Form.Group controlId="formCity">
                    <Form.Control
                        required
                        type="text"
                        placeholder="City"
                        value={address.city ? address.city :
                            billingAddress.city ? billingAddress.city : ''}
                        onChange={(e) => changeHandler(e, 'city')}
                    />
                </Form.Group>
                <Form.Group controlId="formStreet">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Street"
                        value={address.street ? address.street :
                            billingAddress.street ? billingAddress.street : ''}
                        onChange={(e) => changeHandler(e, 'street')}
                    />
                </Form.Group>
                <Form.Group controlId="formHouse">
                    <Form.Control
                        required
                        type="text"
                        placeholder="House"
                        value={address.house ? address.house :
                            billingAddress.house ? billingAddress.house : ''}
                        onChange={(e) => changeHandler(e, 'house')}
                    />
                </Form.Group>
                <Form.Group controlId="formFlat">
                    <Form.Control
                        required={hasFlat}
                        type="text"
                        placeholder="Flat"
                        onChange={(e) => changeHandler(e, 'flat')}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="There are no apartments in my house"
                        onChange={(e) => setHasFlat(!hasFlat)}
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
export default CustomerInformation