"use client";

import React, { useState } from "react";
import "./modal.css";
import CloseIcon from "@/app/common/assets/icons/Close";

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
  buttonTextSize = "14px",
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

      {isOpen && (
        <div className="modal-overlay">
          <div
            className="modal-content p-4 gap-3"
            style={{ backgroundColor, color: textColor, border }}
          >
            <div
              className="close-wrapper z-1"
              style={{ backgroundColor }}
            >
              <div
                className="close-container z-40"
                onClick={() => setIsOpen(false)}
              >
                <button>
                  <CloseIcon stroke="#595D62" />
                </button>
              </div>
            </div>

            
            {imageSrc && (
              <div className="relative z-10">
                <img
                  src={imageSrc}
                  alt="Modal Image"
                  className="w-full rounded-lg"
                />
              </div>
            )}

            <div className="modal-header my-5">
              <h2 style={{ fontSize: titleSize, fontWeight }}>{title}</h2>
              <p style={{ fontSize: descriptionSize, fontWeight }}>{description}</p>
            </div>

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
                  <div className="success-message" style={{
                    backgroundColor: successMessageBg,
                    color: successMessageText,
                  }}>
                    Gracias por suscribirte a nuestro newsletter
                  </div>
                ) : (
                  <button className="submit-button-modal" type="submit">
                    {button}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

