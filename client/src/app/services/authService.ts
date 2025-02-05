import axios from "axios";


const API_URL = "https://c23-53-webapp-production.up.railway.app/api/v1/auth/callback";


export const fetchAccessToken = async (code: string ) => {
  try {
    const response = await axios.get(API_URL, { params: { code } });
    console.log("Respuesta completa de la API:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};


const LOGOUT_URL = "https://c23-53-webapp-production.up.railway.app/api/v1/auth/logout";




export const logoutService = async () => {
  try {
    const LogoutUrl = `${LOGOUT_URL}`;

    await axios.get("https://c23-53-webapp-production.up.railway.app/api/v1/auth/logout");

    
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_data");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error; 
  }
};
