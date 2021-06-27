import { API_HOST } from '../utils/constants';
import axios from 'axios';

const baseUrl = `${API_HOST}/reportes`;
const reports = {};

reports.mPSales = async() => {
    const urlGet = baseUrl + '/most_products_sales';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

reports.mMSales = async() => {
    const urlGet = baseUrl + '/most_mark_sales';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

reports.salesMoney = async() => {
    const urlGet = baseUrl + '/sales_money';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

reports.lastSales = async() => {
    const urlGet = baseUrl + '/last_sales';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

reports.totalSales = async() => {
    const urlGet = baseUrl + '/total_salaries';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

reports.highSales = async() => {
    const urlGet = baseUrl + '/high_salaries';

    const res = await axios.get(urlGet)
        .then(response => {
            return response.data.data;
        })
        .catch(response => { throw response.data; })
    return res;
}

export default reports;