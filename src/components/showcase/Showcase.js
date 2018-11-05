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
        const { query, categorySelected } = this.props;
        const { products } = this.state;

        let showingProduts = query === '' ?
            products : products.filter((p) => (p.name.toLowerCase().includes(query.toLowerCase())));

        showingProduts = categorySelected === '' ? showingProduts : showingProduts.filter((p) => (p.category === categorySelected))

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