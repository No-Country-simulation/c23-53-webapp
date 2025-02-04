import axios from "axios";
import { use } from "react";

const API_URL = "https://c23-53-webapp-production.up.railway.app/api/v1/auth/callback";

export const fetchAccessToken = async (code:string) => {
  try {
    const response = await axios.get(API_URL, {
      params: { code }, // Pasamos el `code` como parámetro en la URL
    });
    return response.data; // Retorna el `access_token` u otro dato que necesites
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};