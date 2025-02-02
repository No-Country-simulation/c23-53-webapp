// "use client";

// import React, { useState } from "react";
// import "./modal.css";
// import CloseIcon from "@/app/common/assets/icons/Close";

// interface ModalProps {
//   title?: string;
//   imageSrc?: string;
//   description?: string;
//   backgroundColor?: string;
//   titleSize?: string; 
//   descriptionSize?: string; 
//   buttonTextSize?: string; 
//   textColor?: string;
//   fontWeight?: "300" | "400" | "500" | "600" | "700";
//   button?: string;
//   border?: string;
//   successMessageBg?: string;
//   successMessageText?: string;
//   inputPlaceholder?: string;

//   onSubmit?: (email: string) => void;
// }

// export const Modal: React.FC<ModalProps> = ({
//   title = "Start building with Culture UI",
//   imageSrc,
//   description = "A short description or information goes here.",
//   backgroundColor = "#ffffff",
//   textColor = "#333333",
//   titleSize = "24px",
//   descriptionSize = "16px",
//   buttonTextSize = "14px",
//   fontWeight = "700",
//   button = "Submit",
//   border,
//   successMessageBg,
//   successMessageText,
//   inputPlaceholder,
//   onSubmit,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim() || !email.includes("@")) return;

//     onSubmit?.(email);
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <button onClick={() => setIsOpen(true)} className="submit-button">
//         Open Modal
//       </button>

//       {isOpen && (
//         <div className="modal-overlay">
//           <div
//             className="modal-content p-4 gap-3"
//             style={{ backgroundColor, color: textColor, border }}
//           >
//             <div
//               className="close-wrapper z-1"
//               style={{ backgroundColor }}
//             >
//               <div
//                 className="close-container z-40"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <button>
//                   <CloseIcon stroke="#595D62" />
//                 </button>
//               </div>
//             </div>

            
//             {imageSrc && (
//               <div className="relative z-10">
//                 <img
//                   src={imageSrc}
//                   alt="Modal Image"
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             )}

//             <div className="modal-header my-5">
//               <h2 style={{ fontSize: titleSize, fontWeight }}>{title}</h2>
//               <p style={{ fontSize: descriptionSize, fontWeight }}>{description}</p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder={inputPlaceholder}
//                 className="input-email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <div className="modal-footer">
//                 {submitted ? (
//                   <div className="success-message" style={{
//                     backgroundColor: successMessageBg,
//                     color: successMessageText,
//                   }}>
//                     Gracias por suscribirte a nuestro newsletter
//                   </div>
//                 ) : (
//                   <button className="submit-button-modal" type="submit">
//                     {button}
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@/app/common/assets/icons/Close";
import "./modal.css";
import { div } from "framer-motion/client";

interface ModalProps {
  title?: string;
  imageSrc?: string;
  description?: string;
  backgroundColor?: string;
  titleSize?: string;
  descriptionSize?: string;
  buttonTextSize?: string;
  textColor?: string;
  fontWeight?: "300" | "400" | "500" | "600" | "700";
  button?: string;
  border?: string;
  successMessageBg?: string;
  successMessageText?: string;
  inputPlaceholder?: string;
  onSubmit?: (email: string) => void;
}

export const Modal: React.FC<ModalProps> = ({
  title = "Start building with Culture UI",
  imageSrc,
  description = "A short description or information goes here.",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  titleSize = "24px",
  descriptionSize = "16px",
  fontWeight = "700",
  button = "Submit",
  border,
  successMessageBg,
  successMessageText,
  inputPlaceholder,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="submit-button">
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content p-4 gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ backgroundColor, color: textColor, border }}
            >
              <div className="close-wrapper z-1" style={{ backgroundColor }}>
                <div className="close-container z-40">
                <button onClick={() => setIsOpen(false)}>
                  <CloseIcon stroke="#595D62" />
                </button>

                </div>
              </div>

              {imageSrc && (
                <div className="relative z-10">
                <motion.img
                src={imageSrc}
                alt="Modal Image"
                className="w-full rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                />

                </div>
              )}

              <motion.div
                className="modal-header my-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h2 style={{ fontSize: titleSize, fontWeight }}>{title}</h2>
                <p style={{ fontSize: descriptionSize, fontWeight }}>{description}</p>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={inputPlaceholder}
                  className="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="modal-footer">
                  {submitted ? (
                    <motion.div
                      className="success-message"
                      style={{ backgroundColor: successMessageBg, color: successMessageText }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Gracias por suscribirte a nuestro newsletter
                    </motion.div>
                  ) : (
                    <button
                      className="submit-button-modal"
                      type="submit"
                     
                    >
                      {button}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

