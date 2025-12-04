'use client';

import { useState } from 'react';
import Confetti from 'react-confetti';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {showConfetti && <Confetti numberOfPieces={600} recycle={false} gravity={0.3} />}
      
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Celebration Form
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
          />
          
          <textarea 
            placeholder="What are you celebrating?" 
            required 
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-gray-800"
          />
          
          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-lg"
          >
            Celebrate! 
          </button>
        </form>
      </div>
    </div>
  );
}