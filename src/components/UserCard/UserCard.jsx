import { useState } from 'react';
import { Formik, Field } from 'formik';
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
} from './UserCard.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

import avatarDefault2x from '../../images/profile_img/Photo_default_2x.jpg';

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <FormTitle>My information:</FormTitle>
        <UserCardWrap>
          <UserInfo>
            <Avatar />
            <Formik initialValues={initialState} onSubmit={handleSubmit}>
              <StylizedForm autoComplete="off">
                <EditIcon>
                  <Icon />
                  <IconEdit />
                </EditIcon>
                <Label htmlFor="name">
                  <span>Name:</span>
                  <Field type="text" name="name" />
                </Label>

                <Label htmlFor="email">
                  <span>Email:</span>
                  <Field type="text" name="email" />
                </Label>
                <Label htmlFor="birthday">
                  <span>Birthday:</span>
                  <Field type="text" name="birthday" />
                </Label>
                <Label htmlFor="birthday">
                  <span>Phone:</span>
                  <Field type="text" name="phone" />
                </Label>
                <Label htmlFor="city">
                  <span>City:</span>
                  <Field type="text" name="city" />
                </Label>
              </StylizedForm>
            </Formik>
          </UserInfo>
        </UserCardWrap>
      </ThemeProvider>
    </>
  );
};

export default UserCard;

// <UserInfo>
//   <Formik initialValues={initialValues}>
//     {({ setFieldValue }) => (
//       <StylizedForm>
//         <label htmlFor="petPhoto">
//           {!petPhoto && !user.avatarURL && (
//             <Avatar src={avatarDefault2x} alt="user avatar" />
//           )}
//           {!petPhoto && user.avatarURL && (
//             <Avatar src={user.avatarURL} alt="user avatar" />
//           )}
//           {!!petPhoto && (
//             <Avatar
//               src={URL.createObjectURL(petPhoto)}
//               id="image"
//               alt={petPhoto.username}
//             />
//           )}
//           <Field name="fileInput">
//             {({ field }) => (
//               <Field
//                 type="file"
//                 id="petPhoto"
//                 name="petPhoto"
//                 accept=".png, .jpg, .jpeg, .webp"
//                 hidden
//                 value=""
//                 onChange={handleClickInput}
//               />
//             )}
//           </Field>
//           <ErrorMessage name="user-avatar" component="div" />
//         </label>
//         <ImageControls>
//           {edit && petPhoto ? (
//             <ConfirmButtonWrap>
//               <EditButton type="button" onClick={handleAddAvatar}>
//                 <Check stroke="#00C3AD" />
//                 Confirm
//               </EditButton>
//               <EditButton type="button" onClick={handleCancelAvatar}>
//                 <Cross />
//                 Cancel
//               </EditButton>
//             </ConfirmButtonWrap>
//           ) : (
//             <EditButton type="button" onClick={handleEditBtn}>
//               <Camera stroke="#54ADFF" style={{ marginRight: 8 }} />
//               Edit photo
//             </EditButton>
//           )}
//         </ImageControls>
//       </StylizedForm>
//     )}
//   </Formik>
//   <UserDataForm onSubmit={handleChangeData} user={user} />
// </UserInfo>;
