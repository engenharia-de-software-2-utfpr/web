import axios from 'axios';
export const TOKEN_KEY = "rcl_token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loged = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log("token armazenado");
};

export const login = (values) => {

  axios.post('http://riodocampolimpo.herokuapp.com/admin/signin', values)
    .then(res => {
      console.log("teste");
      console.log(res.data);
      // console.log("Status: " + res.status);
      if(res.data.success === true) {
        loged(res.data.token);
        return 200;
      } else {
        console.log("não logado");
      }
    }) .catch(function (error) {
      console.log(error.response);
      console.log("Erro:" + error.response.status);
      if (error.response.status === 401) {
        return 401;
      } else {
        return 500;
      }
    });
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
