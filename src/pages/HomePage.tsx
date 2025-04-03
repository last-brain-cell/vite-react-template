import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-7xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
          variants={itemVariants}
        >
          🚀 Vite + React + TypeScript Starter
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-12"
          variants={itemVariants}
        >
          The Ultimate SaaS boilerplate to kick off your next project fast —
          clean architecture, modern stack, and best practices built-in.
        </motion.p>

        <div className={"flex flex-row justify-center items-center gap-4"}>
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/last-brain-cell/vite-react-template"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block my-4 hover:underline"
            variants={itemVariants}
          >
            <button className="flex items-center gap-2 border rounded">
              <Github className={"w-6 h-6"} />
            </button>
          </motion.a>

          {/* Vercel Deploy Button */}
          <motion.a
            href="https://vercel.com/new/clone?repository-url=https://github.com/last-brain-cell/vite-react-template"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block my-4 hover:underline"
            variants={itemVariants}
          >
            <img
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              className="h-10"
            />
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-4"
          variants={containerVariants}
        >
          {/* Tech Stack */}
          <motion.div
            className="bg-white shadow-md border rounded-xl p-6"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              🔧 Tech Stack
            </h2>
            <ul className="text-gray-600 list-disc list-inside space-y-2 text-left">
              <li>⚡️ Vite for blazing fast dev/build</li>

              <li>⚛️ React 19 + TypeScript</li>
              <li>🎨 Tailwind CSS for styling</li>
              <li>
                🎯 ESLint + Prettier (
                <a href={"https://prettier.io/docs/editors"}>
                  Editor Integration
                </a>
                ) for clean code
              </li>
              <li>🧭 React Router (v6)</li>
              <li>🔐 Auth Context (example login flow)</li>
              <li>🎞 Framer Motion for animations</li>
              <li>🧱 shadcn/ui for building blocks</li>
              <li>💻 tailwind/ui for SaaS components</li>
              <li>
                Additionally, I suggest using{" "}
                <a href={"https://ui.aceternity.com/components"}>
                  Aceternity UI
                </a>{" "}
                if you want to include more eye candy components!
              </li>
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            className="bg-white shadow-md border rounded-xl p-6"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              🛠 Features
            </h2>
            <ul className="text-gray-600 list-disc list-inside space-y-2 text-left">
              <li>Protected routes with AuthContext</li>
              <li>Basic Login/Auth flow</li>
              <li>Reusable UI components</li>
              <li>Fully styled with Tailwind</li>
              <li>Great starting point for dashboards or SaaS</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          variants={containerVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            onClick={() => navigate("/admin")}
            variants={itemVariants}
          >
            Go to Admin
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            onClick={() => navigate("/login")}
            variants={itemVariants}
          >
            Go to Login
          </motion.button>
        </motion.div>

        <motion.h2
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-4"
          variants={itemVariants}
        >
          I know this doesn't exactly look "pretty" but its only supposed to be
          a starting point for your project, sort of a blank canvas with most of
          your packages pre-installed!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default HomePage;
