import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className={"min-h-screen min-w-screen bg-gray-100"}>
      <header>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default MainLayout;
