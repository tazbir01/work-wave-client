import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth()
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()

    if (loading || isLoading) {
        return <div className="flex justify-center mt-20">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user && isAdmin){
        return children
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default AdminRoute;