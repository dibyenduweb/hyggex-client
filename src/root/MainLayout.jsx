import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
