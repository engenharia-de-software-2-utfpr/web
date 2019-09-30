import axios from 'axios';

export const getPendentes = () => {
  axios.get('http://riodocampolimpo.herokuapp.com/occurrence-admin?status=waiting')
    .then(res => {
      console.log("teste");
      console.log("aki" + res.data);
      // console.log("Status: " + res.status);
      return res.data;
    }).catch(function (error) {
      console.log("erro: " + error);

      // return([{"_id": '1', "name": "Thais Zorawski", "category": "Incêndio"},{"_id": '2', "name": "Carlos Eduardo Zorawski", "category": "Foco de dengue"},]);
      return([]);
    });
};

export const aprovaPendente = (id, values) => {
  axios.put('http://riodocampolimpo.herokuapp.com/occurrence-admin/:' + id + '/status', values)
    .then(res => {
      console.log("teste");
      console.log("aki" + res);
      // console.log("Status: " + res.status);
      return res;
    }).catch(function (error) {
      console.log("erro: " + error);

      // return([{"_id": '1', "name": "Thais Zorawski", "category": "Incêndio"},{"_id": '2', "name": "Carlos Eduardo Zorawski", "category": "Foco de dengue"},]);
      return(false);
    });
};