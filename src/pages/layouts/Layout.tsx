import { useState } from 'react';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from '@components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <Header toggleSidebar={toggleSidebar} />
      <main className={`flex-grow w-full transition-all duration-300 flex h-screen`}>
        <Sidebar isOpen={isSidebarOpen} />
        <div className='w-full m-4'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;