import { useState, useEffect } from "react"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const EmployeeList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/user.json')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, idx) => <tr key={user.unique_id}>
              <th>{idx +1}</th>
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