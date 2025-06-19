"use client";

import Contact from "../Contact"; // Import the contact form
import React, { memo } from "react";

const ContactModal = memo(
  ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
          <Contact />
        </div>
      </div>
    );
  }
);

export default ContactModal;

