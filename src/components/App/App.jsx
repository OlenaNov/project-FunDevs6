import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import NotFound from 'components/NotFound/NotFound';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const MainPage = lazy(() => import('../../pages/MainPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="user" element={<UserPage />} />
            <Route path="add-pet" element={<AddPetPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
