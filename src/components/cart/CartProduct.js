import React, {useState} from "react";
import {Button, Card, Collapse, Image} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/products/actions/actions";
import removeIcon from "../../img/remove-from-cart.png";

const CartProduct = ({product}) => {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <Card border="secondary" className="product_card cart">
            <Card.Header>
                <Button
                    className="product_remove"
                    onClick={() => dispatch(removeFromCart(product.id))}
                >
                    <Image
                        src={removeIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Remove product from cart"
                    ></Image>
                </Button>
                <Card.Img
                    width={180}
                    height={180}
                    variant="top" src={product.image}
                />
            </Card.Header>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="product_subtitle">
                    {product.price} &#36;
                </Card.Subtitle>
                <Card.Text>
                    <b>Category: </b> {product.category}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="warning"
                    aria-controls="description-text"
                    aria-expanded={isDescriptionOpen}
                    onClick={() => setDescriptionOpen(!isDescriptionOpen)}
                >
                    Product description
                </Button>
                <Collapse in={isDescriptionOpen}>
                    <div id="description-text">
                        {product.description}
                    </div>
                </Collapse>
            </Card.Footer>
        </Card>
    )
}

export default CartProduct;