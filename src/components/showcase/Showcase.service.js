const api = process.env.URL_API || 'http://localhost:8000';

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllProduct = () => {
    return fetch(`${api}/products`, { method: 'GET', headers })
        .then(res => res.json())
        .then(data => data.listProducts)

}

export const getProduct = (product) => {
    return fetch(`${api}/products/${product.id}`, { headers })
        .then(res => res.json())
        .then(data => data.product)
}