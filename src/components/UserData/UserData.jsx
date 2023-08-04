import UserForm from 'components/UserForm/UserForm';
import { UserInfo } from './UserData.styled';

const UserData = ({ toggleEdit, isEditing }) => {
  return (
    <>
      <UserInfo>
        <UserForm isEditing={isEditing} toggleEdit={toggleEdit} />
      </UserInfo>
    </>
  );
};

export default UserData;
