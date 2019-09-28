import axios from 'axios';
export const TOKEN_KEY = "rcl_token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loged = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log("token armazenado");
};

export const login = (values) => {
  // const values = {
  //   "email": email,
	//   "password": senha
  // }
  axios.post('http://riodocampolimpo.herokuapp.com/admin/signin', values)
    .then(res => {
      console.log("teste");
      console.log("aki" + res.data);
      // console.log("Status: " + res.status);
      if(res.success === true) {
        loged(res.data.token);
        console.log("logado");
      } else {
        console.log("não logado");
      }
    });
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
