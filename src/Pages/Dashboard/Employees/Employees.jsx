import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {useState} from "react"
import PayModal from "../PayModal/PayModal";

const Employees = () => {
  const { users, isLoading, refetch } = useUsers()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure()
  // console.log(users)

  if (isLoading) {
    return <div className="flex justify-center mt-20">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  }


  const handleVerify = (id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "For make change"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.patch(`/users/hr/${id}`)
          .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Done!",
                // text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });



  }

  const handleOpenModal =()=>{
    setIsModalOpen(true)
  }
  const handleCloseModal =()=>{
    setIsModalOpen(false)
  }

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
                {
                  user?.verify_status === "verified"
                    ? <p onClick={() => handleVerify(user._id)} className="btn text-green-600 text-2xl"><RiVerifiedBadgeFill></RiVerifiedBadgeFill></p>
                    : <p onClick={() => handleVerify(user._id)} className="btn text-red-500 text-xl"><RxCross2></RxCross2></p>
                }
              </td>
              <td>
                {
                  user?.verify_status === "verified"
                  ? <button onClick={handleOpenModal} className="btn text-green-600">Pay</button>
                  : <button disabled className="btn text-green-600">Pay</button>
                }
              </td>
              <td>
                <Link to={`/dashboard/employees/details/${user._id}`}><button className="btn">details</button></Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      <PayModal isOpen={isModalOpen} closeModal={handleCloseModal}></PayModal>
    </div>
  );
};

export default Employees;