import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentCategory, filterProducts} from "../../redux/actions";
import Product from "./Product";
import {CardColumns, Container, DropdownButton, Spinner, Dropdown, ButtonGroup} from "react-bootstrap";

function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.filteredProducts);
    const categories = useSelector(state => state.products.categories);
    const currentCategory = useSelector(state => state.products.currentCategory);
    const loading = useSelector(state => state.view.loading);
    if (loading) {
        return <Spinner animation="border" variant="warning"/>
    }
    const onSelectCategory = (e) => {
        dispatch(changeCurrentCategory(e));
        dispatch(filterProducts());
    }
    return (
        <Container>
            <DropdownButton
                variant="warning"
                id="dropdown-category"
                title={currentCategory}
                as={ButtonGroup}
                onSelect={(e) => onSelectCategory(e)}
                style={{paddingBottom: '20px'}}
            >
                {categories.map(category => {
                    return (
                        <Dropdown.Item
                            key={category}
                            eventKey={category}
                        >{category}</Dropdown.Item>)
                })}
            </DropdownButton>
            <CardColumns>
                {products.map(product => <Product product={product} key={product.id}/>)}
            </CardColumns>
        </Container>
    )
}

export default Products