import axios from 'axios';

export const TOKEN_KEY = "rcl_token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const loged = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const login = async (values) => {
  try {
    const res = await axios.post('https://riodocampolimpo.herokuapp.com/admin/signin', values);

    if (res.data.success === true) {
      loged(res.data.data.token);
      
      return 200;
    }
  } catch (res) {
    if (res.response.status === 401) {
      return 401;
    } else {
      return 500;
    }
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
