import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentCategory, filterProducts} from "../../store/products/actions/actions";
import Product from "./Product";
import {CardColumns, Container, DropdownButton, Spinner, Dropdown, ButtonGroup} from "react-bootstrap";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.filteredProducts);
    const categories = useSelector(state => state.products.categories);
    const currentCategory = useSelector(state => state.products.currentCategory);
    const loading = useSelector(state => state.view.loading);
    if (loading) {
        return <Spinner animation="border" variant="warning"/>
    }
    const onSelectCategory = (categoryName) => {
        dispatch(changeCurrentCategory(categoryName));
        dispatch(filterProducts());
    }
    return (
        <Container>
            <DropdownButton
                as={ButtonGroup}
                className="category_dropdown"
                variant="warning"
                title={currentCategory}
                onSelect={onSelectCategory}
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

export default Products;