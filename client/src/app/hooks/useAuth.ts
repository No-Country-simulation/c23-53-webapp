import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchAccessToken } from "@/app/services/authService";



interface UserData {
  email: string;
  name: string;
  
}

interface AuthResponse {
  access_token: string;
  user?: UserData;
}


export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();
  const hasFetched = useRef(false);





  const isFetching = useRef(false);

  useEffect(() => {
    const code = searchParams.get("code");
    console.log("Código recibido:", code);
    if (!code || isFetching.current) return;
  
    isFetching.current = true;
    console.log("Llamando a fetchAccessToken...");
    fetchAccessToken(code)
      .then((data: AuthResponse) => {
        console.log("Respuesta del servidor:", data);
        localStorage.setItem("access_token", data.access_token);
        setAccessToken(data.access_token);
        if (data.user) {
          setUser({ email: data.user.email, name: data.user.name });
          localStorage.setItem("user_data", JSON.stringify(data.user));
        }
      })
      .catch((error) => console.error("Error al obtener token:", error));
  }, []);

  

  useEffect(() => {
    const loadAuthData = () => {
      const storedToken = localStorage.getItem("access_token");
      const storedUser = localStorage.getItem("user_data");

      if (storedToken) {
        setAccessToken(storedToken);
      }

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadAuthData();
  }, []);

  const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_data");
  setAccessToken(null);
  setUser(null); 
  router.push("/");
};
 
  return { accessToken, logout ,user};
  
};

