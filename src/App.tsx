import { useAuthContext } from './hooks/useAuthContext';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Loading from './components/Loading';

export const App = () => {
  const { user, isLoadingUser } = useAuthContext();

  return isLoadingUser ? <Loading /> : user ? <UserPage /> : <LoginPage />;
};
