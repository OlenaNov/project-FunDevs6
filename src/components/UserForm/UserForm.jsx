import { Formik } from 'formik';
import {
  Avatar,
  AvatarSection,
  ButtonSave,
  EditIcon,
  EditInpuButton,
  EditPhotoButton,
  EditPhotoWrap,
  FieldStyled,
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if (fileUploaded && fileUploaded.size <= 3000000) {
      setNewAvatarFile(fileUploaded);
      const currentNewAvatar = URL.createObjectURL(fileUploaded);
      setNewAvatar(currentNewAvatar);
    }
    toast.error('Your photo is large');
  };

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    let month = date.getMonth() + 1; // месяцы начинаются с 0
    let day = date.getDate();

    // добавляем ведущий ноль для месяца и дня, если это необходимо
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

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

  const handleSubmit = async (values, { setSubmitting, validateForm }) => {
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
    // eslint-disable-next-line array-callback-return
    Object.entries(updateUserData).map(field => {
      // console.log(field[0]);
      // console.log(field[1]);
      file.append(field[0], field[1]);
    });

    try {
      await dispatch(updateUser(file));
      toast.success('Data updated successfully!👌');
    } catch (error) {
      toast.error('Something went wrong while updating the data.🙁');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: user.name || '',
          email: user.email || '',
          birthday: user.birthday ? formatDate(user.birthday) : '',
          phone: user.phone || '',
          city: user.city || '',
        }}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors }) => (
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
                  <FieldStyled
                    type="text"
                    name="name"
                    disabled={!isEditing}
                    placeholder="Your name"
                  />
                  {/* <ErrorMessage name="name" component={ErrorMessageStyled} /> */}
                </Label>
                <Label htmlFor="email">
                  <span>Email:</span>
                  <FieldStyled
                    type="text"
                    name="email"
                    disabled={!isEditing}
                    placeholder="Your email"
                  />
                </Label>
                <Label htmlFor="birthday">
                  <span>Birthday:</span>
                  <FieldStyled
                    type="text"
                    name="birthday"
                    disabled={!isEditing}
                    placeholder="YYYY-MM-DD"
                  />
                </Label>
                <Label htmlFor="birthday">
                  <span>Phone:</span>
                  <FieldStyled
                    type="text"
                    name="phone"
                    disabled={!isEditing}
                    placeholder="+380"
                  />
                </Label>
                <Label htmlFor="city">
                  <span>City:</span>
                  <FieldStyled
                    type="text"
                    name="city"
                    disabled={!isEditing}
                    placeholder="London"
                  />
                </Label>
                {/* {errors.name && toast.error(errors.name)}
                {errors.email && toast.error(errors.email)}
                {errors.birthday && toast.error(errors.birthday)}
                {errors.phone && toast.error(errors.phone)}
                {errors.city && toast.error(errors.city)} */}
                {isEditing ? <ButtonSave type="submit">Save</ButtonSave> : null}
              </FormSection>
            </UserInfoWrap>
          </StylizedForm>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
