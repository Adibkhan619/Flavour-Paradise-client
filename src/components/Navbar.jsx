import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import Drawer from "./style/Drawer";
import { useContext, useEffect, useState } from "react";
// import Drawer from "./style/Drawer";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState("retro");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("luxury");
        } else {
            setTheme("retro");
        }
    };

    const Navlinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/allFoods">All Foods</NavLink>
            </li>

          
            <li>
                <NavLink to="/gallery">Gallery</NavLink>
            </li>

            {
                user ? <li>
                <NavLink to="/myProfile">My Profile</NavLink>
            </li>
            :
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            }
            

            
        </>
    );

    // const handleLogOut = () => {
    //     logOut().then().catch();
    // };

    return (
        <div>
            <div className="navbar josefin glass bg-opacity-20 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 px-5 space-x-2 text-lg"
                        >
                            {Navlinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="lg:w-16 lg:h-16 w-10 h-10 rounded-full border-4 border-orange-400 "
                                src="https://i.postimg.cc/J76hY5Cc/Dream.png"
                                alt=""
                            />
                        </div>
                        <h1 className="oleo text-xl ">Wonder Seeker</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    {/* DROPDOWN */}
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                {
                                    user? <img
                                    // className="w-10 h-10 border rounded-full"
                                    title={user.displayName}
                                    src={user.photoURL}
                                    alt=""
                                /> : <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                }
                                {/*  */}
                                
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link>Settings</Link>
                            </li>
                            <li>
                                <Link onClick={logOut}>Logout</Link>
                            </li>
                        </ul>
                    </div>

                    {user ? (
                        <div className="flex items-center gap-2">
                            <p className="hidden md:block lg:block">
                                {user.email}
                            </p>
                       
                        </div>
                    ) : (
                        <div>
                            {/* <Drawer></Drawer> */}
                            <NavLink to="/login">
                                <button className="btn btn-primary text-lg satisfy" >
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    )}

                    {/* <Drawer></Drawer> */}

                    <div className="flex justify-between mx-2">
                        <input
                            value=""
                            type="checkbox"
                            onChange={handleToggle}
                            className="toggle"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
