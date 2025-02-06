import React from "react";

interface CommentWithPhotoProps {
  photoSrc: string;
  photoAlt?: string;
  quote: string;
  name: string;
  title: string;
  variant?: "default" | "highlighted" | "minimal"; // 🎨 Tipos de variantes
}

const CommentWithPhoto: React.FC<CommentWithPhotoProps> = ({
  photoSrc,
  photoAlt = "Photo of the person",
  quote,
  name,
  title,
  variant = "default", // 📌 Variante por defecto
}) => {
  // 🎨 Clases según la variante elegida
  const variantClasses = {
    default: "bg-slate-100 dark:bg-slate-800 shadow-lg", // Normal
    highlighted: "bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-500", // Resaltado
    minimal: "bg-transparent dark:bg-transparent border-none shadow-none", // Sin fondo ni bordes
  };

  return (
    <figure className={`md:flex rounded-xl p-6 md:p-8 max-w-4xl mx-auto ${variantClasses[variant]}`}>
      <img
        className="w-32 h-32 md:w-48 md:h-45 md:rounded-none rounded-full mx-auto md:mx-0"
        src={photoSrc}
        alt={photoAlt}
        width="350"
        height="400"
      />
      <div className="pt-6 md:pt-0 md:pl-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            {quote}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-gray-700 dark:text-gray-400">{title}</div>
        </figcaption>
      </div>
    </figure>
  );
};


export default CommentWithPhoto;


// ejemplo de uso

  // <CommentWithPhoto
  //       photoSrc="https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg"
  //       quote="Don't let someone's opinion of you become your reality."
  //       name="Sarah Othen"
  //       title="Staff Engineer, Algolia"
  //       variant="highlighted"  
  //     />