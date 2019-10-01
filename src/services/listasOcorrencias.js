import axios from 'axios';
import { getToken } from './auth';

// Todas as ocorrências
export const getOcorrencias = async () => {
  try {
    const res = await axios.get('http://riodocampolimpo.herokuapp.com/occurrence-admin', {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

      console.log("teste");
      console.log(res.data);
      // console.log("Status: " + res.status);
      if(res.status === 200) {
        return res.data.data;
      }
  } catch (res) {
    console.log("res");
    console.log(res);
    return [];
  }

    // .then(res => {
    //   console.log("teste");
    //   console.log(res.data);
    //   // console.log("Status: " + res.status);
    //   return res.data;
    // }).catch(function (error) {
    //   console.log("erro: " + error);

    //   // return([{"_id": '1', "name": "Thais Zorawski", "category": "Incêndio"},{"_id": '2', "name": "Carlos Eduardo Zorawski", "category": "Foco de dengue"},]);
    //   return([]);
    // });
};

// Ocorrências Pendentes
export const getPendentes = async () => {
  try {
    const res = await axios.get('http://riodocampolimpo.herokuapp.com/occurrence-admin?status=waiting', {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

      // console.log("res");
      // console.log(res);
      if(res.status === 200) {
        return res.data.data;
      }
  } catch (res) {
    // console.log("res");
    // console.log(res);
    return [];
  }
};

export const aprovaPendente = async (id, values) => {
  try {
    const res = await axios.put('http://riodocampolimpo.herokuapp.com/occurrence-admin/:' + id + '/status', values, {
      headers: {
          'Authorization': 'Bearer ' + getToken(),
      }});

      // console.log("1");
    if(res.status === 200) {
      // console.log("2");
      return res;
    }
  } catch (res) {
    // console.log("3");
    // console.log(res);
    return res;
  }

    // if(res.status == 200) {
    //   console.log("2");
    //   return res;
    // } else {
    //   console.log("3");
    //   return res;
    // }

    // .then(res => {
    //   console.log("teste");
    //   console.log(res);
    //   // console.log("Status: " + res.status);
    //   return res;
    // }).catch(function (error) {
    //   console.log("erro: " + error);

    //   return(false);
    // });
};