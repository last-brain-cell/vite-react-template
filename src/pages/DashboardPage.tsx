import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockData } from '@/data.ts';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dashboard
            </motion.h1>
            <motion.p
              className="text-gray-500 text-sm sm:text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome back, <strong>{user}</strong>!
            </motion.p>
          </div>

          <motion.button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-red-600 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Log Out
          </motion.button>
        </div>

        {/* Table */}
        <motion.div
          className="overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 sm:px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {mockData.map((user) => (
              <motion.tr
                key={user.id}
                variants={rowVariants}
                whileHover={{ scale: 1.005 }}
                className="transition-all duration-200"
              >
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{user.id}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{user.name}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">{user.email}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {user.status}
                    </span>
                </td>
              </motion.tr>
            ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
