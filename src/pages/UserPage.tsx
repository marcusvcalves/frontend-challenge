import { useAuthContext } from '../hooks/useAuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Forms from '../components/Forms/Forms';
import Avatar from '../components/Avatar';
import { Navigate } from 'react-router-dom';

const UserPage = () => {
  const { user, handleLogout } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Wrapper className="flex flex-col bg-userpage-background h-screen">
      <Wrapper className="bg-white h-20 flex items-center justify-end">
        <Button
          type="submit"
          onClick={handleLogout}
          text="Logout"
          className="bg-primary-blue text-white h-14 w-72 rounded-lg font-semibold text-lg mr-[2.5%]"
        />
      </Wrapper>
      <Wrapper className="flex flex-col grow justify-center items-center">
        <Card className="bg-white shadow-md rounded-3xl p-4 sm:p-8 lg:p-12 w-full max-w-[30rem]">
          <Avatar
            img={user?.avatar}
            className="flex flex-col justify-center items-center"
          />
          <Forms className="px-3 sm:px-1">
            <InputField
              label="Name"
              type="name"
              name="name"
              value={user?.name || ''}
              readOnly={true}
              prefix={true}
            />
            <InputField
              label="E-mail"
              type="email"
              name="email"
              value={user?.email || ''}
              readOnly={true}
              prefix={true}
            />
          </Forms>
        </Card>
      </Wrapper>
    </Wrapper>
  );
};

export default UserPage;
