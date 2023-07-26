import { useState } from 'react';
import UserForm from 'components/UserForm/UserForm';
import { UserInfo } from './UserData.styled';

const UserData = () => {
  // const user = useSelector(getUser);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <UserInfo>
        {/* <div>
          <Avatar src={avatarDefault2x || avatar} alt="avatar" />
          <img
            src={avatarDefault2x || avatar}
            alt="avatar"
            style={{ width: '50px', height: '50px' }}
          />
          <div>
            <IconEditPhoto /> <span>Edit photo</span>
          </div>
        </div> */}
        <UserForm isEditing={isEditing} toggleEdit={toggleEdit} />
      </UserInfo>
    </>
  );
};

export default UserData;
