import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🚀 Vite + React + TypeScript Starter</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Ultimate SaaS to kick off your next project fast. Clean structure, best practices, and tools already wired in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-5 border">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">🔧 Tech Stack</h2>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>⚡️ Vite for blazing fast dev/build</li>
              <li>⚛️ React 19 + TypeScript</li>
              <li>🎨 Tailwind CSS for styling</li>
              <li>🎯 ESLint + Prettier for clean code</li>
              <li>🧭 React Router (v6) for routing</li>
              <li>🔐 Auth Context (example login flow)</li>
              <li>🎞 Framer Motion for animations</li>
              <li>🧱 shadcn/ui for amazing building blocks</li>
              <li>💻 tailwind/ui for for SaaS components</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 border">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">🛠 Features</h2>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Protected routes with AuthContext</li>
              <li>Basic Login/Auth flow</li>
              <li>Reusable UI components</li>
              <li>Fully styled with Tailwind</li>
              <li>Great starting point for dashboards or SaaS</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
            onClick={() => navigate("/admin")}
          >
            Go to Admin
          </button>
          <button
            className="bg-gray-200 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
