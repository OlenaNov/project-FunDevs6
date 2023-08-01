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
// import { validationSchema } from 'validation';

const UserForm = ({ isEditing, toggleEdit }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const fileInput = useRef();

  // const API = `http://localhost:3000/project-FunDevs6/`;

  const [avatar, setAvatar] = useState(user.avatar || avatarDefault2x);
  // const showAvatar = user.avatar ? `${API + user.avatar}` : avatarDefault2x;

  const [newAvatar, setNewAvatar] = useState(null);

  // const handleFileChange = event => {
  //   if (event.target.files[0]) {
  //     // const url = URL.createObjectURL(event.target.files[0]);
  //     // setAvatar(url);

  //     const file = event.target.files[0];
  //     const blob = new Blob([file], { type: file.type });
  //     setAvatar(blob);
  //   }
  // };

  // обробник подій для завантаження файлу

  const arrayBufferToBase64 = buffer => {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const base64Avatar = arrayBufferToBase64(newAvatar);

  const handleFileChange = event => {
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setNewAvatar(e.target.result);
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  // const handleFileChange = event => {
  //   if (event.target.files[0]) {
  //     setAvatar(event.target.files[0]);
  //     console.log(avatar);
  //   }
  // };

  // const handleFileChange = e => {
  //   console.log(`result`, e.target.result);
  //   setNewAvatar(e.target.files[0]);
  // };

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

  // const [avatar, setAvatar] = useState(user.avatarURL || '');
  // const [name, setName] = useState(user.name || '');
  // const [email, setEmail] = useState(user.email || '');
  // const [birthday, setBirthday] = useState(user.birthday || '');
  // const [phone, setPhone] = useState(user.phone || '');
  // const [city, setCity] = useState(user.city || '');

  const handleSubmit = values => {
    // Перевіряємо, чи є помилки валідації

    console.log('123', values);
    console.log('avatar', avatar);

    let base64Avatar;
    if (avatar instanceof ArrayBuffer) {
      base64Avatar = arrayBufferToBase64(avatar);
    }

    console.log('base64Avatar', base64Avatar);
    dispatch(
      updateUser({
        avatar: base64Avatar,
        name: values.name,
        email: values.email,
        birthday: values.birthday,
        phone: values.phone,
        city: values.city,

        // avatarURL: 'khgk',
        // email: 'Tomas11@gmail.com',
        // name: 'Tomas1199',
        // phone: '+380671234567',
        // city: 'Kharkov',
        // birthday: '1990-11-19',
      })
    );
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
        // validationSchema={validationSchema}
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
