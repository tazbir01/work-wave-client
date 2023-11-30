import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, setError} = useForm()
    const {userLogin} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data)
        userLogin(data.email, data.password)
        .then(() => {
            // console.log(res.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Success.",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state ? location.state : "/")

        })
        .catch(err => {
            // console.log(err.message)
            setError("password", {type: "manual", message: err.message})
        })
    }

    return (
        <div className="hero min-h-screen bg-base-300">
            <Helmet>
                <title>Work Wave | Login</title>
            </Helmet>
            <Link to="/"><div className=" absolute top-10 left-10 md:left-20 text-xl"><FaArrowLeft></FaArrowLeft></div></Link>
            <div className="hero-content flex-col w-full md:w-3/5 lg:w-1/3">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-4xl hidden lg:block lg:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full border-black md:border-2 ">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password")} className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && (
                                <p className='text-red-600'>{errors.password.message}</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-8 font-bold">New here? <Link className="text-lg font-bold text-blue-600" to="/register">please Register.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;