import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Main } from './Layout.styled';
import Loader from 'components/Loader';
import NavBar from 'components/NavBar/NavBar';

export const Layout = () => {
  return (
    <>
      <Main>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
