/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", 
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY", 
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff", 
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin", 
            },
            {
              key: "Permissions-Policy",
              value: "geolocation=(), microphone=()", 
            },
            {
              key: "Access-Control-Allow-Origin",
              value: "*", 
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  