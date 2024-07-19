import LanguageSwitcher from '@components/utils/LanguageSwitcher';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <div className='relative w-full'>
        <div className='absolute top-0 right-0'>
          <LanguageSwitcher className='mt-5 mr-10' />
        </div>
      </div>
      <div className="flex flex-col min-h-screen max-w-screen">
        <main className={`flex-grow w-full transition-all duration-300 flex h-screen`}>
          <div className='w-full'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AuthLayout;