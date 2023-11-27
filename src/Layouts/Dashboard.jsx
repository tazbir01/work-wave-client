import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Work Wove | Dashboard</title>
            </Helmet>
            <div className="w-64 min-h-screen bg-slate-600 p-8">
                <ul className="menu text-white list-disc">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard/employee-list">Employee List</NavLink></li>
                    <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;