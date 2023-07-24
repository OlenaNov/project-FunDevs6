import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from '../Header/Header';

// import Layout from "components/Layout";


const MainPage = lazy(() => import('../../pages/MainPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));
const AddPetPage = lazy(() => import('../../pages/AddPetPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="add-pet" element={<AddPetPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;