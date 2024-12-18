import axios from "axios";

const BASE_URL =
  "https://api-simulacao-do-bulbo-em-camada-superficial.vercel.app";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw new Error("Erro ao obter dados da API");
  }
};
