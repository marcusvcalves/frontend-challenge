import { createContext, useEffect, useState } from 'react';
import { FormikValues } from 'formik';
import axiosClient from '../api/axios';
import { User } from '../interfaces/User';
import { AuthTokens } from '../interfaces/AuthTokens';
import { IAuthContext } from '../interfaces/IAuthContext';

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => {
    const storedAuthTokens = localStorage.getItem('authTokens');
    return storedAuthTokens ? JSON.parse(storedAuthTokens) : null;
  });
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);

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
  };

  useEffect(() => {
    const getUser = () => {
      if (authTokens) {
        setIsLoadingUser(true);
        const config = {
          headers: {
            Authorization: `Bearer ${authTokens.accessToken}`,
          },
        };

        axiosClient
          .get('/auth/profile/', config)
          .then((res) => {
            const userData = {
              name: res.data.name,
              email: res.data.email,
              avatar: res.data.avatar,
            };
            setUser(userData);
          })
          .catch((error) => {
            if (error.response) {
              setAuthTokens(null);
              setUser(null);
              localStorage.removeItem('authTokens');
            }
          })
          .finally(() => {
            setIsLoadingUser(false);
          });
      }
    };

    getUser();
  }, [authTokens]);

  const contextValue = {
    authTokens,
    user,
    handleLogin,
    loginError,
    isLoadingUser,
    setLoginError,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
