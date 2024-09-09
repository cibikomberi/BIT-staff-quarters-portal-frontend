import axios from "axios";
const AUTH_TOKEN = localStorage.getItem('token');
export default axios.create({
    baseURL: 'http://10.10.66.23:8080',headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`
      }
})