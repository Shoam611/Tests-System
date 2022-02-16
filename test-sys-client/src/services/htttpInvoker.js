import axios from 'axios';
export const runPostRequest = async (url, body) => {
    return await (async () => { return (await axios.post(url, body)).data; })();
}


