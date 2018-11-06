import React, { Component } from 'react';
import Product from '../product/Product';
import './Showcase.css';
import * as ShowcaseService from './Showcase.service';
import ProductDetail from '../product-detail/ProductDetail';
import { Route } from 'react-router-dom';

class Showcase extends Component {

    state = {
        products: [],
        idProductSelected: null
    }

    componentDidMount() {
        ShowcaseService.getAllProduct()
            .then((products) => {
                this.setState(() => (
                    { products }
                ))
            })
    }

    productSelected = (id) => {
        this.setState(() => ({ idProductSelected: id }))
    }

    render() {
        const { query, categorySelected } = this.props;
        const { products, idProductSelected } = this.state;

        let showingProduts = query === '' ?
            products : products.filter((p) => (p.name.toLowerCase().includes(query.toLowerCase())));

        showingProduts = categorySelected === '' ? showingProduts : showingProduts.filter((p) => (p.category === categorySelected))

        return (
            <div>
                <Route exact path='/' render={() => (
                    <div id='showcase'>
                        {showingProduts.map((product) => (
                            <Product key={product.id} product={product} productSelected={this.productSelected} />
                        ))}
                    </div>
                )} />

                <Route path='/detail/:id' render={() => (
                    <div id='product-detail'>
                        <ProductDetail productSelected={idProductSelected} />
                    </div>
                )} />
            </div>
        )
    }
}

export default Showcase;