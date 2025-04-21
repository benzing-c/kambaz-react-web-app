import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const RESPONSES_API = `${REMOTE_SERVER}/api/responses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const createResponse = async (response: any) => {
    const res = await axiosWithCredentials.post(`${RESPONSES_API}`, response);
    return res.data;
};

export const fetchUserResponses = async (userId: string) => {
    const res = await axiosWithCredentials.get(`${RESPONSES_API}/${userId}`);
    return res.data;
};

export const deleteUserResponses = async (userId: string) => {
    const res = await axios.delete(`${RESPONSES_API}/${userId}`);
    return res.data;
};