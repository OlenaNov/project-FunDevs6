import { Formik, Form, Field } from 'formik';
import {
  Avatar,
  AvatarSection,
  ButtonSave,
  EditIcon,
  EditInpuButton,
  EditPhotoWrap,
  FormSection,
  Icon,
  IconEdit,
  IconEditPhoto,
  Label,
  StylizedForm,
  UserInfoWrap,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { useState } from 'react';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';
import { updateUser } from 'redux/auth/auth-operations';
import { validationSchema } from 'validation';

const UserForm = ({ isEditing, toggleEdit }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  console.log(222, user);

  // const [avatar, setAvatar] = useState(user.avatarURL || '');
  // const [name, setName] = useState(user.name || '');
  // const [email, setEmail] = useState(user.email || '');
  // const [birthday, setBirthday] = useState(user.birthday || '');
  // const [phone, setPhone] = useState(user.phone || '');
  // const [city, setCity] = useState(user.city || '');

  const handleSubmit = values => {
    // Перевіряємо, чи є помилки валідації

    console.log('123', values);
    dispatch(
      updateUser({
        // avatarURL: 'khgk',
        // name: values.name,
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
      <h1>Social Profiles</h1>
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
            {isEditing ? <ButtonSave type="submit">Save123</ButtonSave> : null}
          </UserInfoWrap>
        </StylizedForm>
      </Formik>
    </div>
  );
};

export default UserForm;
