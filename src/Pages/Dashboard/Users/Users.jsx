import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Users = () => {
    const axiosPublic = useAxiosPublic()

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })

    const admin = users.filter(user => user.role === "admin")
    const hr = users.filter(user => user.role === "hr")
    const employee = users.filter(user => user.role === "employee")
    // console.log(admin, hr, employee)

    return (
        <div>

        </div>
    );
};

export default Users;