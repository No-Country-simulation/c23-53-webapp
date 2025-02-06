

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

//ejemplo de uso
{/* <div className="flex justify-center">
 <Modal
 title="Subscribe to our Newsletter"
 imageSrc="https://cdn0.geoenciclopedia.com/es/posts/8/0/0/montanas_8_orig.jpg"
 button="Submit"
 onSubmit={(email) => console.log("Email recibido:", email)}
 backgroundColor="#fafafa"
 textColor="#000"
 titleSize="24px"
 descriptionSize="14px"
 fontWeight="600"
 border="1px solid #ffffff15"
 successMessageBg="#000"
 successMessageText="#fff"
 inputPlaceholder="Enter your email"
 />  
</div> */}
