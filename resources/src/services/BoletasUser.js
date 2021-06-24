import { API_HOST } from '../utils/constants';
import axios from 'axios';

const baseUrl = `${API_HOST}/pagos`;
const boletasUser = {};

boletasUser.create = async (data) => {
    const urlCreate = baseUrl + '/crear'

    const res = await axios.post(urlCreate, data)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => { throw err.data })
    return res;
}

boletasUser.listar = async() => {
    const urlGet = baseUrl + '/listar';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

export default boletasUser;