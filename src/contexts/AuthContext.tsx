import { createContext, useContext, useState } from 'react';
import { FormikValues } from 'formik';
import axiosClient from '../api/axios';
import { User } from './../interfaces/User';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextType = {
  user: User | undefined;
  handleLogin: (values: FormikValues) => void;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleLogin = (values: FormikValues) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;version=v1_web',
      },
    };

    axiosClient.post('/auth/login/', values, config).then((res) => {
      setUser({
        name: res.data.user.name,
        email: res.data.user.email,
        avatar: res.data.user.avatar,
        accessToken: res.data.tokens.access,
        refreshToken: res.data.tokens.refresh,
      });
    });
  };

  const contextValue = {
    user,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'o hook useAuthContext deve ser usado dentro do AuthContextProvider'
    );
  }

  return context;
};
