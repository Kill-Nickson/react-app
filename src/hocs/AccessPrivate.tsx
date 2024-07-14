import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTE } from '@/utils/enums';
import { useAppSelector } from '@/app/hooks';

const AccessPrivate =
  <P extends Record<string, unknown>>(WrappedComponent: ComponentType<P>) =>
  (props: P) => {
    const { isAuth } = useAppSelector((state) => state.persistedReducer.auth);

    if (!isAuth) return <Navigate to={ROUTE.AUTH_LOGIN} />;

    return <WrappedComponent {...props} />;
  };

export default AccessPrivate;