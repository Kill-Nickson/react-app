import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#f3f3f3] dark:bg-[#3d3d3d] text-black dark:text-white">
      <Outlet />
    </div>
  );
};

export default Layout;