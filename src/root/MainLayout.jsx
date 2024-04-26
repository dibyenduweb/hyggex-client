import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";

const MainLayout = () => {
    return(
        <div className="max-w-8xl mx-auto">
        
             <Outlet>
             <Home/>
             </Outlet>
        </div>
    )}
export default MainLayout;