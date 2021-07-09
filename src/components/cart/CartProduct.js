import React, {useState} from "react";
import {Button, Card, Collapse, Image} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/actions";
import removeIcon from '../../img/remove-from-cart.png';

function CartProduct({product}) {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <Card border="secondary" style={{minWidth: '200px', maxWidth: '200px'}}>
            <Card.Header>
                <Button
                    style={{
                        float: 'right',
                        background: 'transparent',
                        border: 'transparent'
                    }}
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
                <Card.Img width={180}
                          height={180}
                          variant="top" src={product.image}/>
            </Card.Header>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle style={{padding: '10px 0'}}>
                    {product.price} &#36;
                </Card.Subtitle>
                <Card.Text>
                    <b>Category: </b> {product.category}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="warning"
                    onClick={() => setDescriptionOpen(!isDescriptionOpen)}
                    aria-controls="description-text"
                    aria-expanded={isDescriptionOpen}
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

export default CartProduct