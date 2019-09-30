import axios from "axios";

export const getOccurrencies = (status) => {
    return axios.get('/occurrence-admin', { params: { status } })
}
