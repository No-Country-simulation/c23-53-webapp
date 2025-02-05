import axios from "axios";


const API_URL = "https://c23-53-webapp-production.up.railway.app/api/v1/auth/callback";


export const fetchAccessToken = async (code: string ) => {
  try {
    const response = await axios.get(API_URL, { params: { code } });
    console.log("Respuesta completa de la API:", response.data); // ← Agrega esto
    return response.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};