import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import Drawer from "./HomeStyle/Drawer";



const Navbar4 = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

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

    // "dark",
    // "cupcake",
    // "bumblebee",
    // "emerald",
    // "corporate",
    // "synthwave",
    // "retro",
    // "cyberpunk",
    // "valentine",
    // "halloween",
    // "garden",
    // "forest",
    // "aqua",
    // "lofi",
    // "pastel",
    // "fantasy",
    // "wireframe",
    // "black",
    // "luxury",
    // "dracula",
    // "cmyk",
    // "autumn",
    // "business",
    // "acid",
    // "lemonade",
    // "night",
    // "coffee",
    // "winter",
    // "dim",
    // "nord",
    // "sunset"

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
            {/* <li>
                <Drawer></Drawer>
            </li> */}

            {!user && (     
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            )}
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100 bg-opacity-50   relative !z-99999999">
                <div className="navbar-start">
                    <div className="dropdown !z-[9999]">
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
                            className="menu menu-sm dropdown-content mt-3 !z-[9999999] p-2 shadow bg-base-100 rounded-box w-52 px-5 space-x-2 text-lg "
                        >
                            {Navlinks}
                        </ul>
                    </div>
                    <Link to="/">
                    <div className="flex items-center gap-2">
                        <div>
                            <img
                                className="lg:w-16 lg:h-16 w-10 h-10 rounded-full "
                                src="https://i.postimg.cc/nLrczvpY/pngwing-com-6.png"
                                alt=""
                            />
                        </div>
                        <h1 className="oleo text-3xl ">Flavour Paradise</h1>
                    </div>
                    </Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg ">
                        {Navlinks}
                    </ul>
                </div>


{/* NAV END */}
                <div className="navbar-end flex gap-2">
                    {/* <div className="dropdown dropdown-end !z-999999 relative">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    8
                                </span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="dropdown dropdown-end relative !z-999999">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >{
                            user && <div className="w-10 rounded-full">
                                <img
                                    alt=""
                                    src={user?.photoURL }
                                />
                            </div>
                        }                       
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 !z-[9999999999] p-2 shadow bg-base-100 rounded-box w-52 relative overflow-visible "
                        >
                            {/* <li>
                                <Link
                                    to="/myProfile"
                                    className="justify-between"
                                >
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/addFood">Add Food</Link>
                            </li>
                            <li>
                                <Link to={`/food/${user?.email}`}>My Added Food</Link>
                            </li>
                            <li>
                                <Link to="/myOrders">My Orders</Link>
                            </li>
                            <li>
                                <Link onClick={logOut}>Logout</Link>
                            </li>
                        </ul>
                        </div>
                        {user ? (
                        <div className="flex items-center gap-2">
                            <p className="hidden md:block lg:block">
                                {user?.displayName}
                            </p>
                            <button onClick={logOut} className="btn h-full btn-ghost">Logout</button>
                        </div>
                    ) : (
                        <div>
                            {/* <Drawer></Drawer> */}
                            <NavLink to="/login">
                                <button className="btn btn-ghost">Login</button>
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

export default Navbar4;
