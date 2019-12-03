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

export const mudaStatusOcorrencia = async (id, values) => {
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

// Retorna ocorrência com o id passado
export const getOccurrence = async (id_occurrence) => {
  try {
    const res = await axios.get('http://riodocampolimpo.herokuapp.com/occurrence-admin/' + id_occurrence, {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

      if(res.status === 200) {
        return res.data.data;
      }
  } catch (res) {
    // return [];
    return {data: {category_id: "dengue", created_at: "2019-11-27 17:59:27", criticity_level: 5,
    description: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.",
    h3_index: "87a82ab74ffffff", id: 16, latitude: "-24.0614794",
    longitude: "-52.3856449", status: "approved", updated_at: "2019-11-27 17:59:42",
    user_id: "qvaULnmA1dNv4c7u9joGp2pl5i42"}}
  }
};