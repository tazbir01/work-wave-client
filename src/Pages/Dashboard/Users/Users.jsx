import useHr from "../../../hooks/useHr";
import useUsers from "../../../hooks/useUsers";

const Users = () => {
    const [isHr] = useHr()
    const { users } = useUsers()
    console.log(users)

    return (
        <div>
           
        </div>
    );
};

export default Users;