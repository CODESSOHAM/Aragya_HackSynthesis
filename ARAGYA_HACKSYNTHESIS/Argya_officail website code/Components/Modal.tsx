import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-custom-purple rounded-lg shadow-lg max-w-4xl w-full p-6 relative"> {/* Increased max width */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <iframe
          src="http://127.0.0.1:5000/"
          className="w-full h-[700px] border-none"  
          title="Patient DBMS"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
