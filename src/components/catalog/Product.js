import React from "react";
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions";

function Product({product}) {
    const dispatch = useDispatch();
    return (
        <Card border="secondary" style={{minWidth: '10rem'}}>
            <Card.Header>
                <Card.Img variant="top" src={product.image}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle style={{padding: '10px 0'}}>
                    {product.price} &#36;
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer>
                <Button
                    onClick={() => dispatch(addToCart(product))}
                    variant="warning"
                >
                    Add to cart</Button>
            </Card.Footer>
        </Card>
    )
}

export default Product