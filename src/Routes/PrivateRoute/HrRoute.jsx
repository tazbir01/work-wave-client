import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useHr from "../../hooks/useHr";

const HrRoute = ({children}) => {
    const { user, loading } = useAuth()
    const [isHr , isLoading] = useHr()

    const location = useLocation()

    if (loading || isLoading) {
        return <div className="flex justify-center mt-20">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user && isHr){
        return children
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default HrRoute;