import api from './api'

const findProductById = (id) => api.get(`/produto/findById/${id}`)
    .then((response) => response)
    .catch((err) => err)

    export { findProductById}