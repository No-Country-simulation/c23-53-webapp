import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchAccessToken } from "@/app/services/authService";

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasFetched = useRef(false);

  useEffect(() => {
    const code = searchParams.get("code");
    if (code && !hasFetched.current) {
      hasFetched.current = true;
      fetchAccessToken(code)
        .then((data) => {
          localStorage.setItem("access_token", data.access_token);
          setAccessToken(data.access_token);
        })
        .catch((error) => console.error("Error obteniendo el token:", error));
    }
  }, [searchParams]);

  

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    setAccessToken(null);
    router.push("/");
  };
   
 
  return { accessToken, logout };
  
};
