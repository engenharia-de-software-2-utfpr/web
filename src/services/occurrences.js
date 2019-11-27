import axios from 'axios';
import { getToken } from './auth';

// Todas as ocorrências para a lista
export const getAllOccurrences = async () => {
  try {
    const res = await axios.get('http://riodocampolimpo.herokuapp.com/occurrence-admin', {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

      if(res.status === 200) {
        return res.data.data;
      }
  } catch (res) {
    return [];
  }
};

// Ocorrências passando o status desejado na busca por parâmetro
export const getOccurrences = (status) => {
  return axios.get('/occurrence-admin', {
    params: {
      status
    },
    headers: {
      'Authorization': 'Bearer ' + getToken(),
    }
  })
}

export const aprovaPendente = async (id, values) => {
  try {
    const res = await axios.put('http://riodocampolimpo.herokuapp.com/occurrence-admin/' + id + '/status', values, {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

    if(res.status === 200) {
      return res;
    }
  } catch (res) {
    return res;
  }
};