import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import NavTop from '../Navbar/NavTop.jsx';
import "./navbar.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [admissionOpen, setAdmissionOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    };

    //  mega menu open 
    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const toggleAbout = () => {
        setAboutOpen(!aboutOpen);
    };
    const toggleAdmission = () => {
        setAdmissionOpen(!admissionOpen);
    };


    // small device sub menu item  click after close sidebar
    const handleLinkClick = () => {
        setMenuOpen(false);
    };


    // Scroll event handler to make navbar fixed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={`${scrolling ? '' : 'fixed z-50 bg-white w-full shadow-md border-b'}`}>
            <div className='max-w-7xl mx-[3%] md:mx-auto  space-y-3 mt-5 '>
              <NavTop/>
                <hr />
                <div>
                    <nav className={`${scrolling
                        ? ' lg:fixed top-2  w-full py-2 max-w-7xl mx-auto bg-white lg:shadow-lg border-t rounded-xl transition-all duration-300 lg:z-[9999]'
                        : 'relative bg-white'
                        }`}>
                        <div className="">
                            <div className="flex justify-between items-center h-16">
                                <div className="flex items-center gap-3">
                                    <Link to='/' className="flex items-center gap-3">
                                        <img className='w-16 pb-2' src={logo} alt="SSF" />
                                        <div>
                                            <h2 className="font-bold text-lg">Uttara Adhunik</h2>
                                            <h3 className="text-sm">Medical College (UAMC)</h3>
                                        </div>
                                    </Link>
                                </div>


                                {/* Menu for larger screens */}
                                <div className="hidden md:flex space-x-4 items-center font-semibold">
                                    <div className="nav-item">
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-base  active" :
                                                "block px-4 py-2 text-gray-800  hover:text-primary-light"}
                                            onClick={handleLinkClick}
                                        >
                                            Home
                                        </NavLink>
                                    </div>

                                    {/* ABOUT US */}
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setAboutOpen(true)}
                                        onMouseLeave={() => setTimeout(() => setAboutOpen(false), 200)}
                                    >
                                        <button className="nav-item text-gray-800 py-2 px-3 rounded hover:text-primary-light flex items-center">
                                            About Us
                                            {aboutOpen ? <FiChevronUp className="ml-1 text-xl" /> : <FiChevronDown className="ml-1 text-xl" />}
                                        </button>

                                        {/* Mega menu */}
                                        <div className={`mega-menu mt-3 ${aboutOpen ? "show" : ""}`}>
                                            {[
                                                { label: "Overview", path: "/overview" },
                                                { label: "History of UAMC", path: "/history-uamc" },
                                                { label: "Founder Member", path: "/founder-member" },
                                                { label: "EC Member", path: "/ec-member" },
                                                { label: "GB Member", path: "/gb-member" }
                                            ].map((link, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={link.path}
                                                    onClick={handleLinkClick}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "block px-4 py-1 text-white bg-gradient-to-t from-primary-light to-primary-deep"
                                                            : "block px-4 py-2 text-gray-800 hover:bg-gradient-to-t from-primary-light to-primary-deep hover:text-white border-b"
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>

                                    {/* FACILITIES */}
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setTimeout(() => setServicesOpen(false), 200)}
                                    >
                                        <button className="nav-item text-gray-800 py-2 px-3 rounded hover:text-primary-light flex items-center">
                                            Facilities
                                            {servicesOpen ? <FiChevronUp className="ml-1 text-xl" /> : <FiChevronDown className="ml-1 text-xl" />}
                                        </button>

                                        {/* Mega menu */}
                                        <div className={`mega-menu mt-3 ${servicesOpen ? "show" : ""}`}>
                                            {[
                                                { label: "Hospital Service", path: "/a" },
                                                { label: "Hostel", path: "/b" }
                                            ].map((link, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={link.path}
                                                    onClick={handleLinkClick}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "block px-4 py-1 rounded text-white bg-primary-base"
                                                            : "block px-4 py-2 text-gray-800 hover:bg-gradient-to-t from-primary-light to-primary-deep hover:text-white border-b"
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ADMISSION */}
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setAdmissionOpen(true)}
                                        onMouseLeave={() => setTimeout(() => setAdmissionOpen(false), 200)}
                                    >
                                        <button className="nav-item text-gray-800 py-2 px-3 rounded hover:text-primary-light flex items-center">
                                            Admission
                                            {admissionOpen ? <FiChevronUp className="ml-1 text-xl" /> : <FiChevronDown className="ml-1 text-xl" />}
                                        </button>

                                        {/* Mega menu */}
                                        <div className={`mega-menu mt-3 ${admissionOpen ? "show" : ""}`}>
                                            {[
                                                { label: "Admission Rule", path: "/a" },
                                                { label: "Admission Form", path: "/b" }
                                            ].map((link, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={link.path}
                                                    onClick={handleLinkClick}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "block px-4 py-1 rounded text-white bg-primary-base"
                                                            : "block px-4 py-2 text-gray-800 hover:bg-gradient-to-t from-primary-light to-primary-deep hover:text-white border-b"
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                    {[
                                        { label: "Our Program", path: "/our-program" },
                                        { label: "Notice", path: "/notice" },
                                        { label: "Careers", path: "/careers" },
                                        { label: "Contact Us", path: "/contact" }
                                    ].map((link, index) => (
                                        <div key={index} className="nav-item">
                                            <NavLink
                                                to={link.path}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "block px-4 py-2 text-primary-base active"
                                                        : "block px-4 py-2 text-gray-800 hover:text-primary-light"
                                                }
                                                onClick={handleLinkClick}
                                            >
                                                {link.label}
                                            </NavLink>
                                        </div>
                                    ))}

                                </div>

                                {/* Mobile Menu Icon */}
                                <div className="md:hidden flex items-center border border-primary-base p-1  hover:">
                                    <button onClick={toggleMenu}>
                                        {menuOpen ? (
                                            <CgMenuRightAlt className="text-2xl text-primary-base hover:text-white" />
                                        ) : (
                                            <FiMenu className="text-2xl text-primary-base hover:text-white" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 
            ------------------------------------------------------------
                                     MOBILE DEVICE NAVBAR
            ------------------------------------------------------------ */}

                        {(menuOpen && !isClosing) && (
                            <div className="side-menu z-50" >
                                <div className="side-menu-2 ">
                                    <div className="flex justify-between items-center ">
                                        <img className='w-20' src={logo} alt="shabuj" />
                                        <button onClick={toggleMenu}>
                                            <FiX className="text-2xl text-rose-600 border border-rose-600" />
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <NavLink
                                            to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-base font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "} >
                                            Home
                                        </NavLink>
                                    
                                        <div className="block px-4 py-2 text-gray-900">
                                            <button
                                                onClick={toggleServices}
                                                className="w-full text-left  py-2 flex justify-between text-gray-800  hover:text-primary-light"
                                            >
                                                About Us
                                                <span className="border-2 active:border-green-500 active:text-green-500 px-1.5 py-0.5 rounded-xl">
                                                    {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                                                </span>
                                            </button>

                                            {servicesOpen && (
                                                <div className="pl-8 text-[13px] space-y-2">
                                                    {[
                                                        { label: "Overview", path: "/overview" },
                                                        { label: "History of UAMC", path: "/history-uamc" },
                                                        { label: "Founder Member", path: "/founder-member" },
                                                        { label: "EC Member", path: "/ec-member" },
                                                        { label: "GB Member", path: "/gb-member" }
                                                    ].map((service, index) => (
                                                        <NavLink
                                                            key={index}
                                                            to={service.path}
                                                            onClick={handleLinkClick}
                                                            className={({ isActive }) =>
                                                                isActive
                                                                    ? "block px-4 py-1 rounded text-white bg-primary-base"
                                                                    : "block px-4 py-2 text-gray-800 hover:text-primary-light"
                                                            }
                                                        >
                                                            {service.label}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </div>


                                        {[
                                            { label: "Our Program", path: "/our-program" },
                                            { label: "Notice", path: "/notice" },
                                            { label: "Careers", path: "/careers" },
                                            { label: "Contact Us", path: "/contact" }
                                        ].map((link, index) => (
                                            <div key={index} className="nav-item">
                                                <NavLink
                                                    to={link.path}
                                                    onClick={handleLinkClick}
                                                    className={({ isActive }) =>
                                                        isActive ? "block px-4 py-2 text-primary-base font-bold hover: hover:text-primary-light " :
                                                            "block px-4 py-2 text-gray-900 "}>
                                                    {link.label}
                                                </NavLink>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
