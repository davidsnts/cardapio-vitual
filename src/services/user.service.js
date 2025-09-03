import api from './api'

const createUserService = (values) => api.post('/usuario/create', values)
    .then((response) => response)
    .catch((err) => err)

export { createUserService }