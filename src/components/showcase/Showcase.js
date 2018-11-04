import React, { Component } from 'react';
import Product from '../product/Product';
import './Showcase.css';
import * as ShowcaseService from './Showcase.service';

class Showcase extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        ShowcaseService.getAllProduct()
            .then((products) => {
                this.setState(() => (
                    { products }
                ))
            })
    }

    render() {
        const { query } = this.props;
        const { products } = this.state;

        const showingProduts = query === '' ?
            products : products.filter((p) => (p.name.toLowerCase().includes(query.toLowerCase())));


        return (
            <div id='showcase'>
                {showingProduts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        )
    }

}

export default Showcase;