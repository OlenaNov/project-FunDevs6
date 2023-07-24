import Header from "components/Header/Header";
import { Main } from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader";

export const Layout = () => {
 
 return (
  <>
    <Header />
    <Main>
      <Suspense fallback={<Loader /> } >
        <Outlet />
      </Suspense>

    </Main>
  </>
  );
};

export default Layout;