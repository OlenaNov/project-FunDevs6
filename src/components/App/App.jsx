import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import PrivateNoticeRoute from 'routes/PrivateNoitceRoute/PrivateNoticeRoute';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import { selectisRefreshing } from 'redux/auth/auth-selectors';
import Loader from 'components/Loader/Loader';

const MainPage = lazy(() => import('../../pages/MainPage'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const NoticesCategoriesList = lazy(() =>
  import('../../components/NoticesCategoriesList')
);
const OurFriendsPage = lazy(() => import('../../pages/OurFriendsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage to="/main" />} />
              <Route path="notices" element={<NoticesPage />}>
                <Route
                  index
                  element={<Navigate to="/notices/sell" replace />}
                />
                <Route path="sell" element={<NoticesCategoriesList />} />
                <Route path="lost-found" element={<NoticesCategoriesList />} />
                <Route path="for-free" element={<NoticesCategoriesList />} />
                <Route
                  path="favorite"
                  element={
                    <PrivateNoticeRoute
                      redirectTo="/login"
                      component={<NoticesCategoriesList />}
                    />
                  }
                />
                <Route
                  path="my-pets"
                  element={
                    <PrivateNoticeRoute
                      redirectTo="/login"
                      component={<NoticesCategoriesList />}
                    />
                  }
                />
              </Route>
              <Route path="friends" element={<OurFriendsPage />} />
              <Route element={<PublicRoute />}>
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="user" element={<UserPage />} />
                <Route path="add-pet" element={<AddPetPage />} />
              </Route>
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<NotFoundPage to="/not-found" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
