import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic()

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    }
  })

const admin = users.filter(user => user.role === "admin")
const hr = users.filter(user => user.role === "hr")
const employee = users.filter(user => user.role === "employee")
// console.log(admin, hr, employee)


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Bank Accout</th>
            <th>Salary</th>
            <th>Verified</th>
            <th>Pay</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, idx) => <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{user.bank_account}</td>
              <td>{user.salary}</td>
              <td>
                <p className="text-green-600 text-2xl"><RiVerifiedBadgeFill></RiVerifiedBadgeFill></p>
                <p className="text-red-500 text-xl"><RxCross2></RxCross2></p>
              </td>
              <td><button className="btn text-green-600">Pay</button></td>
              <td><button className="btn">details</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;