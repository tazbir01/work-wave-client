import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useHr from "../hooks/useHr";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isHr] = useHr()
    


    return (
        <div className="flex">
            <Helmet>
                <title>Work Wove | Dashboard</title>
            </Helmet>
            <div className="w-64 min-h-screen bg-slate-600 p-8">
                <ul className="menu text-white list-disc">
                    {
                        isAdmin && <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard/all-employees">All Employe List</NavLink></li>
                        </>
                    }
                    {
                        isHr && <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard/employees">Employees</NavLink></li>
                            <li><NavLink to="/dashboard/progress">Progress</NavLink></li>
                        </>
                    }
                    {
                        !isAdmin && !isHr && <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard/work-sheet">Work Sheet</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;