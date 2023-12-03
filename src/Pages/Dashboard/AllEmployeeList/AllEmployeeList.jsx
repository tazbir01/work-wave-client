import useUsers from "../../../hooks/useUsers";

const AllEmployeeList = () => {
    const {users} = useUsers()
    console.log(users)


    return (
        <div>
            <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Role</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, idx) => <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>{user.role}</td>
              <td>{user.verify_status}</td>
            </tr>)
          }
        </tbody>
      </table>
        </div>
    );
};

export default AllEmployeeList;