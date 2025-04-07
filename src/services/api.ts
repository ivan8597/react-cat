import axios from "axios";

const API_KEY = "live_Vxp4O5kG97rUeJa5lL1Uva55zdJ9YTgBLMV8xMx17hGUOgUcy5K7i66fxuP8dFOh"; 
const BASE_URL = "https://api.thecatapi.com/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export type Cat = {
  id: string;
  url: string;
}

export const fetchCat = async (): Promise<Cat> => {
  try {
    const response = await api.get("/images/search?limit=1");
    return response.data[0];
  } catch (error) {
    console.error("Не удалось загрузить изображение кота:", error);
    throw error;
  }
};