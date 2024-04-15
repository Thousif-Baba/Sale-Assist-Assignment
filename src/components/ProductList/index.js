import React, { Component } from 'react';
import ProductCard from '../ProductCard/index.js';
import axios from "axios";
import "./index.css";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,
            error: null,
        };
    }

    componentDidMount() {
        axios.get('https://thousif-baba.github.io/SaleAssistApi/SaleAssistApi.json')
            .then(response => this.setState({ products: response.data.products, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { products, isLoading, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            );
        }
    }
}

export default ProductList;