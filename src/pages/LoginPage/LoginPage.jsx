import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from 'components/Background/Background';
import AuthForm from 'components/AuthForm/AuthForm';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { login } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { isUserLogin, isLoading, checkError } from 'redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

import css from '../../components/Section/Section.module.css';

export const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(checkError);
  const loading = useSelector(isLoading);

  const handleLogin = async ({ email, password }, { setSubmitting }) => {
    const data = { email, password };
    try {
      dispatch(login(data));
    } catch (error) {}
    setSubmitting(false);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/user', { state: { from: '/login' } });
    }
  }, [isLogin, navigate]);

  if (loading && !error) {
    return <Loader />;
  }

  return (
    <Section className={css.sectionlogin}>
      <Background />
      <Container>
        <AuthForm onSubmit={handleLogin} />
      </Container>
    </Section>
  );
};

export default LoginPage;
