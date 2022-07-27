import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (url, params) => {
    const res = await httpRequest.get(url, params);
    return res.data;
};

export { get };
export default httpRequest;
