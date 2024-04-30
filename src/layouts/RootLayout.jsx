import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../layouts/Navbar";

// eslint-disable-next-line react/prop-types
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
