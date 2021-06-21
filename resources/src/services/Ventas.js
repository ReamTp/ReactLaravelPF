import { API_HOST } from '../utils/constants';
import axios from 'axios';

const baseUrl = `${API_HOST}/sales`;
const ventas = {};

ventas.create = async (data) => {
    const urlCreate = baseUrl + '/crear'

    const res = await axios.post(urlCreate, data)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => { throw err.data })
    return res;
}

ventas.obtenerDetalles = async(code) => {
    const urlGet = baseUrl + '/getProducts';

    const res = await axios.post(urlGet, {id: code})
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

export default ventas;