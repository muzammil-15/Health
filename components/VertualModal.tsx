// components/MyComponent.tsx
"use client"

import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={openModal}>
        Open Modal
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <p>Your modal content goes here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
