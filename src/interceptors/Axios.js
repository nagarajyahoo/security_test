import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.defaults.headers.post['Content-Type'] = 'Application/Json';

instance.interceptors.request.use(req => {
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(res => {
    return res;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
