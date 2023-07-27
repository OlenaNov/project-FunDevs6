import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Background from 'components/Background/Background';
import AuthForm from 'components/AuthForm/AuthForm';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
// import ModalCongrats from 'components/ModalCongrats/ModalCongrats'; // Імпортуємо модалку
import { signup } from 'redux/auth/auth-operations';
import { isLoading, checkError } from 'redux/auth/auth-selectors';

import css from '../../components/Section/Section.module.css';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(checkError);
  const [submissionError, setSubmissionError] = useState(null);
  // const [showModal, setShowModal] = useState(false); // Додали стан showModal

  const handleSubmit = async ({ email, password, name }, { setSubmitting }) => {
    const data = { email, password, name };
    console.log(email, password, name);
    try {
      await dispatch(signup(data));
      // setShowModal(true); // Вказуємо, що модалку потрібно показати після успішної реєстрації
      navigate('/user', { state: { from: '/register' } });
    } catch (error) {
      setSubmissionError(error);
      console.log('Something went wrong', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading && !error) {
    // return <Loader />;
  }

  return (
    <Section className={css.sectionRegister}>
      <Background />
      <Container>
        <AuthForm isRegister onSubmit={handleSubmit} />
        {submissionError && <div>Error: {submissionError.message}</div>}
        {/* {showModal && (
          <ModalCongrats onClose={() => setShowModal(false)} />
        )}{' '} */}
        {/* Показуємо модалку, якщо showModal === true */}
      </Container>
    </Section>
  );
};
export default RegisterPage;
