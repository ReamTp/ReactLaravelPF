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

ventas.obtener = async(code) => {
    const urlGet = baseUrl + '/get';

    const res = await axios.post(urlGet, {id: code})
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

ventas.editar = async(data) => {
    const urlUpdate = baseUrl + '/update';

    const res = await axios.put(urlUpdate, data)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data;})
    return res;
}

ventas.active = async(id) => {
    const urlActive = baseUrl + '/activar';
    const data = {id: id};

    const res = await axios.put(urlActive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data;})

    return res;
}

ventas.deactive = async(id) => {
    const urlDeactive = baseUrl + '/desactivar';
    const data = {id: id};

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data;})

    return res;
}

export default ventas;