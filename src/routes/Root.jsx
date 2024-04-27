import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="bg-[#5356FF]">
                <Navbar></Navbar>
            </div>
            <div className=" h-[calc(100vh-467px)] lg:h-[calc(100vh-340px)] md:h-[calc(100vh-419px)]">
               <Outlet></Outlet>
            </div>
            <div>
               <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;