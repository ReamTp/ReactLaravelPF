import { API_HOST } from '../utils/constants';
import axios from "axios";

const baseUrl = `${ API_HOST }/user`;
const usuario = {};

usuario.login = async (user) => {
    // Definir URL de la api a seleccionar
    const urlLogin = baseUrl+'/login';
    const res = await axios.post(urlLogin, user)
        .then(response => { return response.data })
        .catch(response => { return response.data; })
    return res;
}

usuario.datos = async () => {
    const dato = JSON.parse(localStorage.getItem('token'));

    const urlDatos = baseUrl+'/datos';
    const res = await axios.post(urlDatos, dato)
        .then(response => { return response.data})
        .catch(response => { return response.data})
    return res;
}

usuario.actualizar = async (user) => {
    const idData = JSON.parse(localStorage.getItem('token'));
    const urlUpdate = baseUrl+'/update';

    user = {id: idData.id, ...user, celular: user.celular, telefono: user.telefono};

    const res = await axios.put(urlUpdate, user)
        .then(response => { return response.data})
        .catch(response => { return response.data})
    return res;
}

usuario.register = async (user) => {
    const urlRegister = baseUrl+'/registrar';
    const res = await axios.post(urlRegister, user)
        .then(response => {return response.data })
        .catch(response => {return response.data })
    return res;
}

usuario.level = async () => {
    const dato = JSON.parse(localStorage.getItem('token'));

    // Definir URL de la api a seleccionar
    const urlLevel = baseUrl+'/level';

    const res = await axios.post(urlLevel, dato)
        .then(response => {return response.data.data;})
        .catch((e) => { return e; })

        return res;
}

usuario.auth = async () => {
    const dato = JSON.parse(localStorage.getItem('token'));
    // Definir URL de la api a seleccionar
    const urlAuth = baseUrl+'/comprobar';
    const res = await axios.post(urlAuth, dato)
        .then(response => {
            let bol = null;
            if(response) {
                bol = {resp: true};
            }
            return bol;
        })
        .catch(e => { return e; })
    return res;
}

export default usuario;