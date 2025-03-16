
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="font-inter">
            <div className="h-28">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-285px)] mt-5">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
