import { useAuthContext } from '../contexts/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Forms from '../components/Form/Forms';
import Avatar from '../components/Avatar';

const UserPage = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <Wrapper className="flex flex-col bg-userpage-background h-screen">
      <Wrapper className="bg-white h-20 flex items-center justify-end">
        <Button
          onClick={handleLogout}
          text="Logout"
          className="bg-primary-blue text-white h-14 w-72 rounded-lg font-semibold text-lg mr-10"
        />
      </Wrapper>
      <Wrapper className="flex flex-col grow justify-center items-center">
        <Card className="bg-white shadow-md rounded-3xl h-[27.5rem] w-[30rem]  pt-14">
          <Avatar
            img={user?.avatar}
            className="flex flex-col justify-center items-center"
          />
          <Forms className="px-9">
            <InputField
              label="Your Name"
              type="name"
              name="name"
              value={user?.name || ''}
              readOnly={true}
            />

            <InputField
              label="Your E-mail"
              type="email"
              name="email"
              value={user?.email || ''}
              readOnly={true}
            />
          </Forms>
        </Card>
      </Wrapper>
    </Wrapper>
  );
};

export default UserPage;
