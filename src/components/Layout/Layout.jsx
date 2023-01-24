import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>
        <header>
          <Navigation></Navigation>
          <userMenu></userMenu>
        </header>
        <Outlet />
      </div>
      ;
    </>
  );
}

export default Layout;
