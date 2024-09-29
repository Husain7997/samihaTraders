
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;