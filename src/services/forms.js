import axios from 'axios';

import { getToken } from './auth';

export const createForm = async (values) => {
    const res = await axios.post('https://riodocampolimpo.herokuapp.com/form', values);

    if (res.data.success === true) {
        return 200;
    }
}

export const getForms = async () => {
    try {
        const res = await axios.get('https://riodocampolimpo.herokuapp.com/form/all', {
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            }
        });
    
        if(res.status === 200) return res.data.data;
    } catch (res) {
        return [];
    }
};
