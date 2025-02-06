import React from "react";


interface NotFoundPageProps {
  title?: string;
  message?: string;
  variant?: "default" | "maintenance" | "notFound";
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "404 Error",
  message = "Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site.",
  variant = "default",
}) => {

  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    maintenance: "bg-yellow-100 text-yellow-800",
    notFound: "bg-red-100 text-red-800",
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${variantClasses[variant]}`}>
      <h1 className="text-6xl font-bold mb-4">{title}</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">{variant === "maintenance" ? "Under maintenance" : "Page not found"}</h2>
      <p className="text-center text-gray-500 max-w-md">{message}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 h-64 text-gray-300 mt-8"
        viewBox="0 0 200 200"
        fill="none"
      >
        <text x="65" y="100" fontSize="80" fontWeight="bold" fill="currentColor">
          404
        </text>
      </svg>
    </div>
  );
};

export default NotFoundPage;


//Ejemplo de uso

{/* <div className="space-y-6">
 Variante "not-found" para la página 404 
<NotFoundPage
  title="Page Not Found"
  message="Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site."
  variant="not-found"  // Variante para la página no encontrada
/>

 Variante "maintenance" 
<NotFoundPage
  title="Under Maintenance"
  message="Sorry, we are currently performing some updates. Please try again later."
  variant="maintenance"  // Variante para la página en mantenimiento
/>

 Variante "default" 
<NotFoundPage
  title="404 Error"
  message="Sorry, the page you are looking for doesn’t exist."
  variant="default"  // Variante predeterminada
/>
</div> */}