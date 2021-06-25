import { API_HOST } from '../utils/constants';
import axios from 'axios';

const baseUrl = `${API_HOST}/capacitaciones`;
const capacitaciones = {};

capacitaciones.create = async (data) => {
    const urlCreate = baseUrl + '/crear'

    const res = await axios.post(urlCreate, data)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => { throw err.data })
    return res;
}

capacitaciones.listar = async() => {
    const urlGet = baseUrl + '/listar';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

capacitaciones.getUsers = async() => {
    const id = JSON.parse(localStorage.getItem('token')).id;
    const urlGet = baseUrl + '/getusers/'+id;

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}


capacitaciones.deactive = async(id) => {
    const urlDeactive = baseUrl + '/desactivar';
    const data = {id: id};

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(response => { throw response.data;})

    return res;
}

export default capacitaciones;