import { Formik, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import * as Yup from 'yup';
import {
  ButtonSave,
  EditIcon,
  EditInpuButton,
  IconEdit,
  Icon,
  Label,
  StylizedForm,
  Avatar,
  IconEditPhoto,
  AvatarSection,
  EditPhotoWrap,
  FormSection,
} from './UserForm.styled';
import Notiflix from 'notiflix';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';

import { updateUser } from 'redux/auth/auth-operations';

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileSize',
    'Image too large, max 3mb',
    value => !value || (value && value.size <= 3000000)
  ),
  name: Yup.string().required('Name is required field'),
  email: Yup.string()
    .required('Email  is required field')
    .matches(emailRegExp, 'Invalid email address'),
  birthday: Yup.date()
    .required('Enter a date of birth')
    .min(new Date(1900, 0, 1))
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string()
    .required('Phone is required field')
    .matches(phoneRegExp, 'Invalid phone number'),
  city: Yup.string().required('City is required field'),
});

const UserForm = ({ isEditing, toggleEdit }) => {
  // ...
  // const initialState = {
  //   avatar: null,
  //   name: '',
  //   email: '',
  //   birthday: '',
  //   phone: '',
  //   city: '',
  // };

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [avatar, setAvatar] = useState(user.avatar || avatarDefault2x);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [birthday, setBirthday] = useState(user.birthday || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [city, setCity] = useState(user.city || '');

  useEffect(() => {
    setAvatar(user.avatar || avatarDefault2x);
    setName(user.name || '');
    setEmail(user.email || '');
    setBirthday(user.birthday || '');
    setPhone(user.phone || '');
    setCity(user.city || '');
  }, [user]);

  // const toggleEdit = () => {
  //   setIsEditing(!isEditing);
  // };

  const handleSubmit = (values, { errors, touched }) => {
    // Перевіряємо, чи є помилки валідації
    console.log(values);
    const errorFields = Object.keys(errors)
      .filter(key => touched[key])
      .map(key => errors[key]);

    if (errorFields.length > 0) {
      // Якщо є помилки, показуємо їх
      Notiflix.Notify.failure(errorFields.join('\n'));
    } else {
      // Якщо помилок немає, оновлюємо стан та диспатчимо дію
      setAvatar(values.avatar);
      setName(values.name);
      setEmail(values.email);
      setBirthday(values.birthday);
      setPhone(values.phone);
      setCity(values.city);

      dispatch(
        updateUser({
          avatar: values.avatar,
          name: values.name,
          email: values.email,
          birthday: values.birthday,
          phone: values.phone,
          city: values.city,
        })
      );
    }
  };
  // const [icon, setIcon] = React.useState(false);

  // const toggleIcon = () => {
  //   setIcon(prevIcon => !prevIcon);
  // };

  return (
    <Formik
      initialValues={{
        avatar: avatar,
        name: name,
        email: email,
        birthday: birthday,
        phone: phone,
        city: city,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <StylizedForm autoComplete="off">
          <EditIcon>
            <EditInpuButton type="button" onClick={toggleEdit}>
              {isEditing ? <Icon /> : <IconEdit />}
            </EditInpuButton>
          </EditIcon>
          <Label htmlFor="avatar">
            {/* <input
              id="avatar"
              name="avatar"
              type="file"
              onChange={event => {
                setFieldValue('avatar', event.currentTarget.files[0]);
              }}
              disabled={!isEditing}
            /> */}
            <AvatarSection>
              <Avatar src={avatar} alt="avatar" />
              <EditPhotoWrap style={{ border: 'none' }}>
                {isEditing ? (
                  <>
                    <IconEditPhoto /> <span>Edit photo</span>
                  </>
                ) : (
                  <>{/* <IconCheckPhoto /> <span>Confirm</span> */}</>
                )}
              </EditPhotoWrap>
            </AvatarSection>
          </Label>
          <FormSection>
            <Label htmlFor="name">
              <span>Name:</span>
              <Field
                type="text"
                name="name"
                disabled={!isEditing}
                placeholder="123"
              />
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
          {isEditing ? (
            <ButtonSave type="submit" disabled={isSubmitting}>
              Save
            </ButtonSave>
          ) : null}
        </StylizedForm>
      )}
    </Formik>
  );
};

export default UserForm;
