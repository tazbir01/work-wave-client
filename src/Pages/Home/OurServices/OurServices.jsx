import { IoPersonOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md"
const OurServices = () => {
    return (
        <div>
            <div className="divider text-2xl font-bold">Services</div> 
            <div className="border-8 rounded-xl p-5">
            <div className="flex gap-5">
                <div className="space-y-3">
                    <p className="text-6xl "><IoPersonOutline></IoPersonOutline></p>
                    <h2 className="text-2xl font-semibold">Employee Profiles:</h2>
                    <p>Effortlessly manage and access detailed employee profiles, including personal information, job roles, and contact details.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-6xl"><FaTasks></FaTasks></p>
                    <h2 className="text-2xl font-semibold">Task Management:</h2>
                    <p>Simplify task assignment, track progress, and enhance team collaboration with our intuitive Task Management system.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-6xl "><MdCoPresent></MdCoPresent></p>
                    <h2 className="text-2xl font-semibold">Attendance Tracking:</h2>
                    <p>Ensure accurate attendance records with our user-friendly Attendance Tracking feature, including leave requests and overtime tracking.</p>
                </div>
                <div className="space-y-3">
                    <p className="text-6xl "><MdOutlineMiscellaneousServices></MdOutlineMiscellaneousServices></p>
                    <h2 className="text-2xl font-semibold">Service Requests:</h2>
                    <p>Submit and track service requests seamlessly with our Service Requests module. From IT support to maintenance, we&#39;ve got you covered.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurServices;