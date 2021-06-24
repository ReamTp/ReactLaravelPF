import { API_HOST } from '../utils/constants';
import axios from 'axios';

const baseUrl = `${API_HOST}/notifications`;
const notificaciones = {};

notificaciones.create = async (data) => {
    const urlCreate = baseUrl + '/crear'

    const res = await axios.post(urlCreate, data)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw err.data
        })
    return res;
}

notificaciones.listar = async () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const urlGet = baseUrl + '/listar/' + token.id;

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => {
            throw response.data;
        })
    return res;
}

notificaciones.leerUna = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = {id: id, idR: token.id};
    const urlDeactive = baseUrl + '/leido';

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => {
            throw response.data;
        })

    return res;
}

notificaciones.leerTodas = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = {id: token.id};
    const urlDeactive = baseUrl + '/leidos';

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => {
            throw response.data;
        })

    return res;
}

notificaciones.noShow = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const data = {id: token.id};
    const urlDeactive = baseUrl + '/noshow';

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => {
            throw response.data;
        })

    return res;
}

export default notificaciones;
