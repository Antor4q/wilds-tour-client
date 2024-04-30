import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="  bg-[#070F2B]">
            <div className="lg:max-w-[1240px] mx-auto lg:h-[300px]  ">
            <footer className="px-4 divide-y  text-white">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link to={"/"} className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center h-[60px] w-[200px] rounded-full ">
                               <img src={logo} className="" alt="" />
                            </div>
                           
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Contact</h3>
                            <ul className="space-y-1">
                                <li>
                                   wildsTour@gmail.com
                                </li>
                                <li>
                                    +99124534543
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase ">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <FaFacebook className="w-5 h-5" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <FaXTwitter className="w-5 h-5" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400">© wilds tour 2024 All rights reserved.</div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;