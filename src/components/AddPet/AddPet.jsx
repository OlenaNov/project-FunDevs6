import React from 'react';
<<<<<<< Updated upstream

import toast from 'react-hot-toast';

=======
import { useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
>>>>>>> Stashed changes
import { useEffect } from 'react';

const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .min(2, 'Minimum 2 characters')
        .max(50, 'Maximum 50 characters')
        .required('Title is required (min 2, max 50 characters)'),
  }),

  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost-found', 'for-free'])
    .required('Category is required'),

  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/^[a-zA-Z. ']+$/, 'not match the required pattern')
    .required('Name is required (min 2, max 16 characters)'),
  petBirthday: yup
    .string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'DD.MM.YYYY format needed')
    .required('Pet Birthday is required (DD.MM.YYYY format)'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Breed is required (min 2, max 16 characters)'),
  file: yup
    .mixed()
    .test('fileSize', 'File size is too large', value => value?.size <= 3145728)
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .required('Photo is required'),
  sex: yup.string().when('category', {
    is: category =>
      category === 'sell' ||
      category === 'lost-found' ||
      category === 'for-free',
    then: schema =>
      schema.oneOf(['Female', 'Male']).required('Sex is required'),
  }),
  location: yup.string().when('category', {
    is: category => category !== 'your pet',
    then: schema =>
      schema
        .matches(/^[A-Z][a-zA-Z]*$/, 'City begins with capitalize character')
        .required('City is required'),
  }),
  price: yup.number().when('category', {
    is: category => category === 'sell',
    then: schema =>
      schema
        .moreThan(0, 'Price must be greater than 0')
        .required('Price is required'),
  }),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters')
    .required('comments is required'),
});

export const AddPet = () => {
  const [step, setStep] = useState(1);

  const isPetOption = selectedOption === 'your pet';

  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const status = isPetOption ? petStatus : postStatus;
=======
>>>>>>> Stashed changes

  useEffect(() => {
    switch (status) {
      case 2:
        if (isPetOption) {
          dispatch(resetPetStatus());
          navigate('/user');
        } else {
          dispatch(resetStatus());
          navigate('/notices/my-pets');
        }
        break;

      case 3:
        if (isPetOption) {
          toast.error(petError);
          dispatch(resetPetStatus());
        } else {
          toast.error(postError);
          dispatch(resetStatus());
        }
        break;

      default:
        break;
    }
<<<<<<< Updated upstream
  }, [status, dispatch, isPetOption, navigate, petError, postError]);
=======
  }, []);
>>>>>>> Stashed changes
};
