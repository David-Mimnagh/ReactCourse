import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID dc762cae38c5a7964b267d06b6ce413c48c2e649323ba2ad6e5f333762037956'
  }
});