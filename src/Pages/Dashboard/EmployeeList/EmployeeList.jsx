import Table from "../../../Components/Table/Table";
import { useState, useEffect } from "react"

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
              <td>Pay</td>
              <td>details</td>
            </tr>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;