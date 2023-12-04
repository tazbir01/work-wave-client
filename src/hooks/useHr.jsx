import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHr = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: isHr=[], isPending: isLoading } = useQuery({
        queryKey: [user?.email, "isHr"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/hr/${user.email}`)
            console.log(res.data)
            return res.data?.hr
        }
    })


    return [isHr, isLoading]
};

export default useHr;