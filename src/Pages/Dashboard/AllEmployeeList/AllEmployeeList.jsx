import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";

const AllEmployeeList = () => {
  const { users, refetch } = useUsers()
  // console.log(users)
  const axiosSecure = useAxiosSecure()

  const handleFireButton = (id) => {

    Swal.fire({
      title: "Are you sure?",
      // text: `for fire `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "For make change"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/fire/${id}`)
          .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Fired!",
                // text: "Your file has been deleted.",
                // icon: ""
              });
              refetch()
            }
          })
      }
    });
  }

  const handleMakeHr = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "For make change"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/employeeToHr/${id}`)
          .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                // title: "Fired!",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });
  }


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
            <th>Fired</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, idx) => <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>
                {user.role}

                {
                  user.role !== "hr" && <button onClick={() => handleMakeHr(user._id)} className="btn btn-sm text-green-600">make hr</button>
                }
              </td>
              <td>{user.verify_status}</td>
              <td>
                {
                  user?.action === "fired"
                    ? <p className="text-orange-600 font-bold">Fired</p>
                    : <button onClick={() => handleFireButton(user._id)} className="btn btn-sm text-red-600">Fire</button>
                }
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeList;