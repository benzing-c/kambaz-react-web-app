import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const updateQuestion = async (question: any) => {
    const { data } = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
};

export const deleteQuestion = async (questionId: string) => {
    const response = await axios.delete(`${QUESTIONS_API}/${questionId}`);
    return response.data;
};

export const fetchQuestion = async (questionId: string) => {
    const response = await axiosWithCredentials.get(`${QUESTIONS_API}/${questionId}`)
    return response.data;
}

export const fetchQuestions = async () => {
    const response = await axiosWithCredentials.get(`${QUESTIONS_API}`)
    return response.data;
}