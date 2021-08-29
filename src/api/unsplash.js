import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Cwt3okmd9bjGlxZQ1NCyDfmfFxkwl4x97FFCpZ1bkE4'
    }
});