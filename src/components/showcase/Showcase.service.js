import { URL_API } from '../../ApiConfig'


const headers = {
    'Accept': 'application/json',
}

export const getAllProduct = () => {
    return fetch(`${URL_API}/products`, { method: 'GET', headers })
        .then(res => res.json())
        .then(data => data.listProducts)

}

export const getProduct = (product) => {
    return fetch(`${URL_API}/products/${product.id}`, { headers })
        .then(res => res.json())
        .then(data => data.product)
}