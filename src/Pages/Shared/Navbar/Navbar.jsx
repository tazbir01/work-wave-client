import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../../src/assets/home/logo.png"

const Navbar = () => {
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>

        {
            user ? <button onClick={handleLogout}>Logout</button>
                : <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-black text-white fixed z-10 bg-opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-14" src={logo} alt="" />
                    <a className="font-semibold text-xl">WorkWave</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;