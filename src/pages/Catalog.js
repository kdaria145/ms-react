import React from "react";
import Products from "../components/catalog/Products";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";

function ShoppingCart () {
    const loading = useSelector(state => state.view.loading);
    return (
        <Container style={{
            textAlign: loading ? 'center' : 'inherit',
            paddingTop: loading ? '20%' : '0'
        }}>
            <Products/>
        </Container>
    )
}

export default ShoppingCart