import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://riodocampolimpo.herokuapp.com/';

axios.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU2OTg3ODU3NX0.th4xn-NdQAvDnKHnmuCAr04VjwacYyl7IDUaqF1astg';
    return request;
});

ReactDOM.render(<App />, document.getElementById('root'));
