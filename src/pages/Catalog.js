import React from "react";
import Products from "../components/catalog/Products";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

const ShoppingCart = () => {
    const loading = useSelector(state => state.view.loading);
    return (
        <Container
            className={
                loading ? "loading" : ""
            }>
            <Products/>
        </Container>
    )
}

export default ShoppingCart;