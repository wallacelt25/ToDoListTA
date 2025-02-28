import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-200">
      <h1 className="text-5xl font-bold mb-6">Welcome to Our App</h1>
      <button
        onClick={() => navigate('/todo')}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to To Do List
      </button>
    </div>
  );
}

export default LandingPage;

