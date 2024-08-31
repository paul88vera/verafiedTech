import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
