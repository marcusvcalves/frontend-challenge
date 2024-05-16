import { createContext, useCallback, useEffect, useState } from 'react';
import { FormikValues } from 'formik';
import axiosClient from '../api/axios';
import { User } from '../interfaces/User';
import { AuthTokens } from '../interfaces/AuthTokens';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from '../interfaces/IAuthContext';

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => {
    const storedAuthTokens = localStorage.getItem('authTokens');
    return storedAuthTokens ? JSON.parse(storedAuthTokens) : null;
  });
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (values: FormikValues) => {
    axiosClient
      .post('/auth/login/', values)
      .then((res) => {
        const authTokens: AuthTokens = {
          accessToken: res.data.tokens.access,
          refreshToken: res.data.tokens.refresh,
        };
        setAuthTokens(authTokens);
        localStorage.setItem('authTokens', JSON.stringify(authTokens));
        setLoginError(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setLoginError('Invalid email or password.');
        }
      });
  };

  const handleLogout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/');
  };

  const navigateToUserPage = useCallback(() => {
    navigate('/user-page');
  }, [navigate]);

  useEffect(() => {
    const getUser = () => {
      if (authTokens) {
        const config = {
          headers: {
            Authorization: `Bearer ${authTokens.accessToken}`,
          },
        };

        axiosClient.get('/auth/profile/', config).then((res) => {
          const userData = {
            name: res.data.name,
            email: res.data.email,
            avatar: res.data.avatar,
          };
          setUser(userData);
          navigateToUserPage();
        });
      }
    };

    getUser();
  }, [authTokens, navigateToUserPage]);

  const contextValue = {
    authTokens,
    user,
    handleLogin,
    loginError,
    setLoginError,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
