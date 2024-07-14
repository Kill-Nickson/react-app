import { ComponentType } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTE } from '@/utils/enums';
import { useAppSelector } from '@/app/hooks';

const AuthPrivate =
  <P extends Record<string, unknown>>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    const { isAuth } = useAppSelector((state) => state.persistedReducer.auth);
    const location = useLocation();

    const authRoutes = [ROUTE.AUTH_LOGIN, ROUTE.AUTH_REGISTER];
    const isAuthRoute = authRoutes.includes(location.pathname as ROUTE);

    if (isAuth && isAuthRoute) {
      return <Navigate to={ROUTE.APP_ROOT} replace />;
    }

    return <WrappedComponent {...props} />;
  };

export default AuthPrivate;