import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";



const Root = () => {
    
    return (
        <div>
            <div className="">
              
            </div>
            <div className="bg-[#070F2B]">
                <Navbar></Navbar>
            </div>
            <div className="">
               <Outlet></Outlet>
            </div>
            <div>
               <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;