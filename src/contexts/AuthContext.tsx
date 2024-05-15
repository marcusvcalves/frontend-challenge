import { createContext, useContext, useEffect, useState } from 'react';
import { FormikValues } from 'formik';
import axiosClient from '../api/axios';
import { User } from '../interfaces/User';
import { AuthTokens } from '../interfaces/AuthTokens';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextType = {
  authTokens: AuthTokens | null;
  user: User | null;
  handleLogin: (values: FormikValues) => void;
  handleLogout: () => void;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(() => {
    const storedAuthTokens = localStorage.getItem('authTokens');
    return storedAuthTokens ? JSON.parse(storedAuthTokens) : null;
  });
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (values: FormikValues) => {
    axiosClient.post('/auth/login/', values).then((res) => {
      const authTokens: AuthTokens = {
        accessToken: res.data.tokens.access,
        refreshToken: res.data.tokens.refresh,
      };
      setAuthTokens(authTokens);
      localStorage.setItem('authTokens', JSON.stringify(authTokens));
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
        });
      }
    };

    getUser();
  }, [authTokens]);

  const contextValue = {
    authTokens,
    user,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'o hook useAuthContext deve ser usado dentro do AuthProvider'
    );
  }

  return context;
};
