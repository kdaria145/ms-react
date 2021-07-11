import React from "react";
import {CardDeck, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CartProduct from "../components/cart/CartProduct";

const ShoppingCart = () => {
    const cart = useSelector(state => state.products.cart)
    if (!cart.length) {
        return <h4>Cart is empty</h4>
    }
    return (
        <Container>
            <Nav.Link as={Link} to="/order">Place order</Nav.Link>
            <CardDeck>
                {cart.map(product => <CartProduct product={product} key={product.id}/>)}
            </CardDeck>
        </Container>
    )
};

export default ShoppingCart;