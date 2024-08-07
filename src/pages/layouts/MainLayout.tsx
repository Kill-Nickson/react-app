import { Suspense, useState } from 'react';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Sidebar from '@components/Sidebar';
import { Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const drawerWidth = 220;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <Header toggleSidebar={toggleSidebar} />
      <main className={`flex-grow w-full transition-all duration-300 flex h-screen`}>
        <Sidebar isOpen={isSidebarOpen} drawerWidth={drawerWidth} />
        <div
          className={'p-4 relative'}
          style={{ width: isSidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%' }}
        >
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;