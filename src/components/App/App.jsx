import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const MainPage = lazy(() => import('../../pages/MainPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
// const AddPetPage = lazy(() => import('../../pages/AddPetPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const NoticesCategoriesList = lazy(() =>
  import('../../components/NoticesCategoriesList')
);
const OurFriendsPage = lazy(() => import('../../pages/OurFriendsPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="/notices/sell" replace />} />
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route path="favorite" element={ <PrivateRoute redirectTo="/login" component={<NoticesCategoriesList />} /> } />
            <Route path="own" element={ <PrivateRoute redirectTo="/login" component={<NoticesCategoriesList />} />}/>
          </Route>
          <Route path="friends" element={<OurFriendsPage />}/>
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="user" element={<UserPage />} />
            {/* <Route path="add-pet" element={<AddPetPage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
