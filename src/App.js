import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Catalog from './pages/Catalog';
import ShoppingCart from './pages/ShoppingCart';
import PlaceOrder from './pages/PlaceOrder';
import cartIcon from './img/cart.png';
import {Image, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/actions";

function App() {
    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Navbar className="bg-light justify-content-between">
                        <Nav className="mr-auto">
                            <Nav.Link
                                as={Link}
                                to="/"
                            >Catalog</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link
                                as={Link}
                                to="/cart"
                                className="justify-content-end"
                            >
                                <Image
                                    src={cartIcon}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="Cart"
                                />
                                <h3
                                    style={{
                                        display: cart.length ? 'initial' : 'none'
                                    }}
                                >
                                    {cart.length}
                                </h3>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route
                            path={'/'}
                            exact
                            component={Catalog}
                        />
                        <Route
                            path={'/cart'}
                            exact
                            component={ShoppingCart}
                        />
                        <Route
                            path={'/order'}
                            exact
                            component={PlaceOrder}
                        />
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
