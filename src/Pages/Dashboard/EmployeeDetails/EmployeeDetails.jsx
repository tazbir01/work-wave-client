import { useLoaderData } from "react-router-dom";

const EmployeeDetails = () => {
    const user = useLoaderData()
    const {name, image, designation}= user;
    console.log(user)
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold text-center">Employee Details</h2>
            <div>
            <img className="w-24 border" src={image} alt="" />
            <p className="text-lg font-bold">{name}</p>
            <p className="font-bold text-slate-400">{designation}</p>
            </div>
        </div>
    );
};

export default EmployeeDetails;