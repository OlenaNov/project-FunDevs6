// import { Formik, Field, ErrorMessage } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from 'redux/auth/auth-selectors';
// import {
//   ButtonSave,
//   EditIcon,
//   EditInpuButton,
//   IconEdit,
//   Icon,
//   Label,
//   StylizedForm,
//   Avatar,
//   IconEditPhoto,
//   AvatarSection,
//   EditPhotoWrap,
//   FormSection,
//   ErrorMessageStyled,
// } from './UserForm.styled';
// import Notiflix from 'notiflix';
// import { updateUser } from 'redux/auth/auth-operations';
// import { validationSchema } from 'validation';

// import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';

// const UserForm = ({ isEditing, toggleEdit }) => {
//   const dispatch = useDispatch();

//   const user = useSelector(getUser);

//   const [avatar, setAvatar] = useState(user.avatar || avatarDefault2x);
//   const [name, setName] = useState(user.name || '');
//   const [email, setEmail] = useState(user.email || '');
//   const [birthday, setBirthday] = useState(user.birthday || '');
//   const [phone, setPhone] = useState(user.phone || '');
//   const [city, setCity] = useState(user.city || '');

//   useEffect(() => {
//     setAvatar(user.avatar || avatarDefault2x);
//     setName(user.name || '');
//     setEmail(user.email || '');
//     setBirthday(user.birthday || '');
//     setPhone(user.phone || '');
//     setCity(user.city || '');
//   }, [user]);

//   // const toggleEdit = () => {
//   //   setIsEditing(!isEditing);
//   // };

//   const handleSubmit = (values, { errors, touched }) => {
//     // Перевіряємо, чи є помилки валідації
//     console.log(values);
//     const errorFields = Object.keys(errors)
//       .filter(key => touched[key])
//       .map(key => errors[key]);

//     if (errorFields.length > 0) {
//       // Якщо є помилки, показуємо їх
//       Notiflix.Notify.failure(errorFields.join('\n'));
//     } else {
//       // Якщо помилок немає, оновлюємо стан та диспатчимо дію
//       setAvatar(values.avatar);
//       setName(values.name);
//       setEmail(values.email);
//       setBirthday(values.birthday);
//       setPhone(values.phone);
//       setCity(values.city);

//       dispatch(
//         updateUser({
//           avatar: values.avatar,
//           name: values.name,
//           email: values.email,
//           birthday: values.birthday,
//           phone: values.phone,
//           city: values.city,
//         })
//       );
//     }
//   };
//   // const [icon, setIcon] = React.useState(false);

//   // const toggleIcon = () => {
//   //   setIcon(prevIcon => !prevIcon);
//   // };

// return (
//   <Formik
//     initialValues={{
//       avatar: avatar,
//       name: name,
//       email: email,
//       birthday: birthday,
//       phone: phone,
//       city: city,
//     }}
//     onSubmit={handleSubmit}
//     validationSchema={validationSchema}
//   >
//     {({ errors, touched, isSubmitting, setFieldValue }) => (
//       <StylizedForm autoComplete="off">
//         <EditIcon>
//           <EditInpuButton type="button" onClick={toggleEdit}>
//             {isEditing ? <Icon /> : <IconEdit />}
//           </EditInpuButton>
//         </EditIcon>
//         <Label htmlFor="avatar">
//           {/* <input
//               id="avatar"
//               name="avatar"
//               type="file"
//               onChange={event => {
//                 setFieldValue('avatar', event.currentTarget.files[0]);
//               }}
//               disabled={!isEditing}
//             /> */}
//           <AvatarSection>
//             <Avatar src={avatar} alt="avatar" />
//             <EditPhotoWrap style={{ border: 'none' }}>
//               {isEditing ? (
//                 <>
//                   <IconEditPhoto /> <span>Edit photo</span>
//                 </>
//               ) : (
//                 <>{/* <IconCheckPhoto /> <span>Confirm</span> */}</>
//               )}
//             </EditPhotoWrap>
//           </AvatarSection>
//         </Label>
//         <FormSection>
//           <Label htmlFor="name">
//             <span>Name:</span>
//             <Field
//               type="text"
//               name="name"
//               disabled={!isEditing}
//               placeholder="123"
//             />
//             <ErrorMessage name="name" component={ErrorMessageStyled} />
//           </Label>

//           <Label htmlFor="email">
//             <span>Email:</span>
//             <Field type="text" name="email" disabled={!isEditing} />
//           </Label>
//           <Label htmlFor="birthday">
//             <span>Birthday:</span>
//             <Field type="text" name="birthday" disabled={!isEditing} />
//           </Label>
//           <Label htmlFor="birthday">
//             <span>Phone:</span>
//             <Field type="text" name="phone" disabled={!isEditing} />
//           </Label>
//           <Label htmlFor="city">
//             <span>City:</span>
//             <Field type="text" name="city" disabled={!isEditing} />
//           </Label>
//         </FormSection>
//         {isEditing ? (
//           <ButtonSave type="submit" disabled={isSubmitting}>
//             Save
//           </ButtonSave>
//         ) : null}
//       </StylizedForm>
//     )}
//   </Formik>
// );
// };

// export default UserForm;

import { Formik, Field, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
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
  ErrorMessageStyled,
  UserInfoWrap,
} from './UserForm.styled';
import Notiflix from 'notiflix';
import { updateUser, updateUserAvatar } from 'redux/auth/auth-operations';
import { validationSchema } from 'validation';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';

const UserForm = ({ isEditing, toggleEdit }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

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

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'birthday':
        setBirthday(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'city':
        setCity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (values, { errors, touched }) => {
    // Перевіряємо, чи є помилки валідації
    const errorFields = Object.keys(errors)
      .filter(key => touched[key])
      .map(key => errors[key]);

    if (errorFields.length > 0) {
      // Якщо є помилки, показуємо їх
      Notiflix.Notify.failure(errorFields.join('\n'));
    } else {
      // Якщо помилок немає, оновлюємо стан та диспатчимо дію
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

      if (values.avatar instanceof File) {
        const formData = new FormData();
        formData.append('avatar', values.avatar);
        dispatch(updateUserAvatar(formData));
      }
    }
  };

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
      onChange={handleChange}
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
                <ErrorMessage name="name" component={ErrorMessageStyled} />
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
          </UserInfoWrap>
        </StylizedForm>
      )}
    </Formik>
  );
};

export default UserForm;
