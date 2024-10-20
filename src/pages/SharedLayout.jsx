import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
