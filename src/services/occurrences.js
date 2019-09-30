import axios from "axios";

export const getOccurrences = (status) => {
    return axios.get('/occurrence-admin', { params: { status } })
}
