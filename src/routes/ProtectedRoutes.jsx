import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return user ? <Outlet /> : <Navigate to="/login" replace/>;
}

export default ProtectedRoutes
