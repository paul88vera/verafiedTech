import { Outlet, ScrollRestoration } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RootLayout;
