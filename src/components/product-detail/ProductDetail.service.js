import { URL_API } from '../../ApiConfig';

const headers = {
    'Accept': 'application/json',

}

export const getById = (id) => {
    console.log('GetByid', id);

    return fetch(`${URL_API}/products/${id}`, { method: 'GET', headers })
        .then(res => res.json())
        .then(data => data.listProducts)

}