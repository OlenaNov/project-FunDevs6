import { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  StylizedForm,
  UserInfo,
  UserCardWrap,
  FormTitle,
  Avatar,
  Label,
  EditIcon,
  Icon,
  IconEdit,
  IconEditPhoto,
  EditInpuButton,
  ButtonSave,
} from './UserCard.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';

// const validationSchema = Yup.object({
//   name: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email address').required('Required'),
//   birthday: Yup.string().required('Required'),
//   phone: Yup.string().required('Required'),
//   city: Yup.string().required('Required'),
// });

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required('Please, add your photo')
    .test(
      'fileSize',
      'Image too large, max 3mb',
      value => value.size <= 3000000
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

const initialState = {
  avatar: null,
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserCard = () => {
  // const [state, setState] = useState({ ...initialState });

  const [isEditing, setIsEditing] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (values, actions) => {
    setAvatar(values.avatar);
    setName(values.name);
    setEmail(values.email);
    setBirthday(values.birthday);
    setPhone(values.phone);
    setCity(values.city);
    console.log(values);
    console.log(actions);
  };

  // const handleActiveClick = name => {
  //   handleClick(name);
  // };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <FormTitle>My information:</FormTitle>
      <UserCardWrap>
        <UserInfo>
          <div>
            <Avatar />
            <div>
              <IconEditPhoto /> <span>Edit photo</span>
            </div>
          </div>
          <Formik
            initialValues={initialState}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, isSubmitting }) => (
              <StylizedForm autoComplete="off">
                <EditIcon>
                  <EditInpuButton type="button" onClick={toggleEdit}>
                    <Icon />
                    <IconEdit />
                  </EditInpuButton>
                </EditIcon>
                <Label htmlFor="name">
                  <span>Name:</span>
                  <Field type="text" name="name" disabled={!isEditing} />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </Label>

                <Label htmlFor="email">
                  <span>Email:</span>
                  <Field type="text" name="email" disabled={!isEditing} />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </Label>
                <Label htmlFor="birthday">
                  <span>Birthday:</span>
                  <Field type="text" name="birthday" disabled={!isEditing} />
                  {errors.birthday && touched.birthday ? (
                    <div>{errors.birthday}</div>
                  ) : null}
                </Label>
                <Label htmlFor="birthday">
                  <span>Phone:</span>
                  <Field type="text" name="phone" disabled={!isEditing} />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </Label>
                <Label htmlFor="city">
                  <span>City:</span>
                  <Field type="text" name="city" disabled={!isEditing} />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}
                </Label>
                {isEditing ? (
                  <ButtonSave type="submit" disabled={isSubmitting}>
                    Save
                  </ButtonSave>
                ) : (
                  <button>LogOut</button>
                )}
              </StylizedForm>
            )}
          </Formik>
        </UserInfo>
      </UserCardWrap>
    </>
  );
};

export default UserCard;
