import Header from "components/Header/Header";
import { Main } from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
 
 return (
  <>
    <Header />
    <Main>
      <Suspense fallback={"Loading"} >
        <Outlet />
      </Suspense>

    </Main>
  </>
  );
};

export default Layout;