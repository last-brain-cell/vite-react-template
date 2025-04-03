import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div>
      <nav></nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default AdminLayout;
