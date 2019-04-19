import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e415ef54cc1c072081b3c668c7d478aed82955aec8b9573f329974be196f49d0'
    }
});