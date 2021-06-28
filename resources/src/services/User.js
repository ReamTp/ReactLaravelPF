import { API_HOST } from '../utils/constants';
import axios from "axios";

const baseUrl = `${ API_HOST }/user`;
const usuario = {};

usuario.login = async (user) => {
    // Definir URL de la api a seleccionar
    const urlLogin = baseUrl+'/login';
    const res = await axios.post(urlLogin, user)
        .then(response => { return response.data })
        .catch(() => {
            return {
                data: null,
                message: "Datos Incorrectos",
                success: false,
            }
         })
    return res;
}

usuario.datos = async (code = null) => {
    let dato;

    if (code === null) {
        dato = JSON.parse(localStorage.getItem('token'));
    } else {
        dato = {id: code};
    }

    const urlDatos = baseUrl+'/datos';
    const res = await axios.post(urlDatos, dato)
        .then(response => {
            return response.data
        })
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

usuario.listar = async() => {
    const urlGet = baseUrl + '/listar';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

usuario.getTipoUsers = async () => {
    const url = baseUrl + '/gettipouser';

    const res = await axios.get(url)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

usuario.getDepartaments = async () => {
    const url = baseUrl + '/getdepartments';

    const res = await axios.get(url)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

usuario.active = async(id) => {
    const urlActive = baseUrl + '/activar';
    const data = {id: id};

    const res = await axios.put(urlActive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data;})

    return res;
}

usuario.deactive = async(id) => {
    const urlDeactive = baseUrl + '/desactivar';
    const data = {id: id};

    const res = await axios.put(urlDeactive, data)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data;})

    return res;
}

export default usuario;