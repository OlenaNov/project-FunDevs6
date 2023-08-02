// import cloudinary from 'cloudinary';
import { Formik, Field } from 'formik';
import {
  Avatar,
  AvatarSection,
  ButtonSave,
  EditIcon,
  EditInpuButton,
  EditPhotoButton,
  EditPhotoWrap,
  FormSection,
  Icon,
  IconCheckPhoto,
  IconCheckPhotoNo,
  IconConfirmBox,
  IconEdit,
  IconEditPhoto,
  Label,
  StylizedForm,
  UserInfoWrap,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { useRef, useState } from 'react';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';
import { updateUser } from 'redux/auth/auth-operations';
import { validationSchema } from 'validation';

const UserForm = ({ isEditing, toggleEdit }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const fileInput = useRef();

  const [avatar, setAvatar] = useState(user.avatar || avatarDefault2x);

  const [newAvatar, setNewAvatar] = useState(null);
  const [newAvatarFile, setNewAvatarFile] = useState(null);

  const handleFileChange = event => {
    const fileUploaded = event.target.files[0];
    setNewAvatarFile(fileUploaded);
    const currentNewAvatar = URL.createObjectURL(fileUploaded);
    setNewAvatar(currentNewAvatar);
  };

  const handleConfirmChange = () => {
    setAvatar(newAvatar);
    setNewAvatar(null);
  };

  const handleCancelChange = () => {
    setNewAvatar(null);
  };

  const handleEditPhoto = () => {
    fileInput.current.click();
  };

  const handleSubmit = values => {
    // Перевіряємо, чи є помилки валідації

    const updateUserData = {
      name: values.name,
      email: values.email,
      birthday: values.birthday,
      phone: values.phone,
      city: values.city,
      avatar: newAvatarFile,
    };
    const file = new FormData();
    Object.entries(updateUserData).map(field => {
      console.log(field[0]);
      console.log(field[1]);
      file.append(field[0], field[1]);
    });

    dispatch(updateUser(file));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: user.name || '',
          email: user.email || '',
          birthday: user.birthday || '',
          phone: user.phone || '',
          city: user.city || '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StylizedForm autoComplete="off">
          <EditIcon>
            <EditInpuButton type="button" onClick={toggleEdit}>
              {isEditing ? <Icon /> : <IconEdit />}
            </EditInpuButton>
          </EditIcon>

          <UserInfoWrap>
            <AvatarSection>
              <Avatar src={newAvatar || avatar} alt="User avatar" />
              {isEditing && (
                <EditPhotoWrap>
                  {/* <EditInpuButton type="button" onClick={handleEditPhoto}>
                    Edit Photo
                  </EditInpuButton> */}
                  {!newAvatar ? (
                    <EditPhotoButton type="button" onClick={handleEditPhoto}>
                      <IconEditPhoto /> <span>Edit Photo</span>
                    </EditPhotoButton>
                  ) : (
                    <IconConfirmBox>
                      <IconCheckPhoto
                        type="button"
                        onClick={handleConfirmChange}
                      ></IconCheckPhoto>
                      <span>Confirm</span>
                      <IconCheckPhotoNo
                        type="button"
                        onClick={handleCancelChange}
                      ></IconCheckPhotoNo>
                    </IconConfirmBox>
                  )}
                  <input
                    type="file"
                    ref={fileInput}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </EditPhotoWrap>
              )}
            </AvatarSection>

            <FormSection>
              <Label htmlFor="name">
                <span>Name:</span>
                <Field
                  type="text"
                  name="name"
                  disabled={!isEditing}
                  placeholder="Your name"
                />
                {/* <ErrorMessage name="name" component={ErrorMessageStyled} /> */}
              </Label>
              <Label htmlFor="email">
                <span>Email:</span>
                <Field type="text" name="email" disabled={!isEditing} />
              </Label>
              <Label htmlFor="birthday">
                <span>Birthday:</span>
                <Field type="text" name="birthday" disabled={!isEditing} />
              </Label>
              <Label htmlFor="birthday">
                <span>Phone:</span>
                <Field type="text" name="phone" disabled={!isEditing} />
              </Label>
              <Label htmlFor="city">
                <span>City:</span>
                <Field type="text" name="city" disabled={!isEditing} />
              </Label>
            </FormSection>
          </UserInfoWrap>
          {isEditing ? <ButtonSave type="submit">Save</ButtonSave> : null}
        </StylizedForm>
      </Formik>
    </div>
  );
};

export default UserForm;
