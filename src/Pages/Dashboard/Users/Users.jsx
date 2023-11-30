import useHr from "../../../hooks/useHr";
import useUsers from "../../../hooks/useUsers";
import Employees from "../Employees/Employees"

const Users = () => {
    const [isHr] = useHr()
    const { users } = useUsers()
    // console.log(users)

    const admin = users?.filter(user => user?.role === "admin") || []
    const hr = users?.filter(user => user?.role === "hr") || []
    const employees = users?.filter(user => user?.role === "employee") || []
    // console.log(admin, hr, employees)

    return (
        <div>
            {/* {
                isHr ? (employees ? <Employees employees={employees}></Employees> : <p>loading</p>)
                    : <> <p>access denaid</p></>
            } */}
            <div>
                {isHr ? (
                    employees ? (
                        <Employees employees={employees}></Employees>
                    ) : (
                        <p>Loading employees...</p>
                    )
                ) : (
                    <p>Access denied. You are not in HR role.</p>
                )}
            </div>
        </div>
    );
};

export default Users;