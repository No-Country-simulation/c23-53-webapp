import React from "react";

interface RememberOption {
  id: string;
  type: "checkbox" | "radio";
  name?: string;
  label: string;
  description: string;
}

interface RememberMeOptionsProps {
  options: RememberOption[];
  variant?: "default" | "outlined" | "minimal";
}

const RememberMeOptions: React.FC<RememberMeOptionsProps> = ({ options, variant = "default" }) => {
  const variantClasses = {
    default: "p-6 border rounded-lg shadow-md bg-white",
    outlined: "p-6 border-2 border-blue-500 rounded-lg bg-white",
    minimal: "p-6 bg-transparent shadow-none border-none",
  };

  return (
    <div className={`flex flex-col space-y-6 w-80 ${variantClasses[variant]}`}>
      {options.map(({ id, type, name, label, description }) => (
        <div key={id} className="flex items-start space-x-3">
          <input
            id={id}
            type={type}
            name={name}
            className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <div>
            <label htmlFor={id} className="font-medium text-gray-800">
              {label}
            </label>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RememberMeOptions;






//Ejemplo de uso


// import React from "react";
// import RememberMeOptions from "./components/cultureui/cards/remenberMeOptions/RememberMeOptions"; // Ajusta la ruta según tu estructura de carpetas

// const App = () => {
//   const rememberMeOptions = [
//     {
//       id: "rememberMe",
//       type: "checkbox",
//       label: "Remember Me",
//       description: "Keep me logged in on this device.",
//     },
//     {
//       id: "subscribe",
//       type: "checkbox",
//       label: "Subscribe to newsletter",
//       description: "Get the latest updates and news.",
//     },
//     {
//       id: "acceptTerms",
//       type: "radio",
//       label: "Accept terms and conditions",
//       description: "By checking this, you agree to our terms of service.",
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-semibold mb-6">Login Options</h1>
//       {/* Llamada al componente con opciones y variante predeterminada */}
//       <RememberMeOptions options={rememberMeOptions} variant="outlined" />
//     </div>
//   );
// };

// export default App;