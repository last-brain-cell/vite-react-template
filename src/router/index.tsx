import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import ProtectedRoute from '@/components/ProtectedRoute';

import ErrorPage from '@/pages/ErrorPage';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from "@/pages/DashboardPage.tsx";
import { AuthProvider } from "@/contexts/AuthContext.tsx";

// Lazy imports for code splitting:
const HomePage = lazy(() => import('../pages/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <DashboardPage />
          </Suspense>
        ),
      },
      // ...add more admin routes here
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
