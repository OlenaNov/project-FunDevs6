import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from 'components/Button/Button';

import {
  registrationValidationSchema,
  loginValidationSchema,
} from './../../validation/authValidation';

import { GoEyeClosed } from 'react-icons/go';
import { GoEye } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import { BsCheck } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import css from './AuthForm.module.css';

const AuthForm = ({ isRegister, onSubmit }) => {
  const validationSchema = isRegister
    ? registrationValidationSchema
    : loginValidationSchema;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passworConfirmdVisible);
  };

  const clearInput = (fieldName, setFieldValue) => {
    setFieldValue(fieldName, '');
  };

  const hasFieldError = (errors, fieldName) => errors[fieldName];
  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        ...(isRegister && { name: '' }),
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await onSubmit(values, { setSubmitting });
          if (!isRegister) {
            
          }
        } catch (error) {
          toast.error('Login failed. Please check your email and password.'); // Показуємо повідомлення про неуспішний вхід
        }
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form
          className={`${css.form} ${isRegister ? css.register : css.login}`}
        >
          <div className={css.inputContainer}>
            {isRegister ? (
              <h2 className={css.title}>Registration</h2>
            ) : (
              <h2 className={css.title}>Login</h2>
            )}
            {isRegister && (
              <div className={css.inputWrap}>
                <label htmlFor="name" hidden>
                  Name
                </label>
                <Field
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
                  className={`${css.input} ${
                    touched.name && errors.name && css.errorInput
                  }`}
                />
                {touched.name && hasFieldError(errors, 'name') && (
                  <RxCross2
                    id="svg"
                    className={css.crossIcon}
                    onClick={() => clearInput('name', setFieldValue)}
                  />
                )}
                {touched.name && isFieldValid(errors, 'name') && (
                  <BsCheck id="svg" className={css.confirmIcon} />
                )}
              </div>
            )}
            {touched.name && !errors.name ? (
              <div className={css.successMessage}>Name is secure</div>
            ) : (
              <div className={css.errorWrap}>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>
            )}
            <div className={css.inputWrap}>
              <label htmlFor="email" hidden>
                Email
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={`${css.input} ${
                  touched.email && errors.email && css.errorInput
                }`}
              />
              {touched.email && hasFieldError(errors, 'email') && (
                <RxCross2
                  id="svg"
                  className={css.crossIcon}
                  onClick={() => clearInput('email', setFieldValue)}
                />
              )}
              {touched.email && isFieldValid(errors, 'email') && (
                <BsCheck id="svg" className={css.confirmIcon} />
              )}
            </div>
            {touched.email && !errors.email ? (
              <div className={css.successMessage}>Email is secure</div>
            ) : (
              <div className={css.errorWrap}>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>
            )}

            <div className={css.inputWrap}>
              <label htmlFor="password" hidden>
                Password
              </label>
              <Field
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={`${css.input} ${
                  touched.password && !errors.password && css.successInput
                } ${touched.password && errors.password && css.errorInput}`}
              />
              {passwordVisible ? (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={css.eyeBtn}
                >
                  <GoEye id="svg" className={css.eyeIcon} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={css.eyeBtn}
                >
                  <GoEyeClosed id="svg" className={css.eyeIcon} />
                </button>
              )}
              {touched.password && !errors.password ? (
                <div className={css.successMessage}>Password is secure</div>
              ) : (
                <div className={css.errorWrap}>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.error}
                  />
                </div>
              )}
            </div>
            {isRegister && (
              <div className={css.inputWrap}>
                <label htmlFor="confirmPassword" hidden>
                  Confirm password
                </label>
                <Field
                  id="confirmPassword"
                  type={passworConfirmdVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className={`${css.input} ${
                    touched.confirmPassword &&
                    !errors.confirmPassword &&
                    css.successInput
                  } ${
                    touched.confirmPassword &&
                    errors.confirmPassword &&
                    css.errorInput
                  }`}
                />
                {passworConfirmdVisible ? (
                  <button
                    type="button"
                    onClick={togglePasswordConfirmVisibility}
                    className={css.eyeBtn}
                  >
                    <GoEye id="svg" className={css.eyeIcon} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={togglePasswordConfirmVisibility}
                    className={css.eyeBtn}
                  >
                    <GoEyeClosed id="svg" className={css.eyeIcon} />
                  </button>
                )}
                {touched.confirmPassword && !errors.confirmPassword ? (
                  <div className={css.successMessage}>Password confirmed</div>
                ) : (
                  <div className={css.errorWrap}>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className={css.error}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={css.btnContainer}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={css.button}
            >
              {isRegister ? 'Registration' : 'Login'}
            </Button>
            {isRegister ? (
              <p className={css.text}>
                Already have an account?{' '}
                <Link to="/login" className={css.link}>
                  Login
                </Link>
              </p>
            ) : (
              <p className={css.text}>
                Don't have an account?{' '}
                <Link to="/register" className={css.link}>
                  Register
                </Link>
              </p>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
