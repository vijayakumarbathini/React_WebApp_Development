import axios from 'axios';

const  instance = axios.create({
    baseURL: 'https://react-backend-jay.firebaseio.com/'
});
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default instance;