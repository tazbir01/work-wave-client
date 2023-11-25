import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
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
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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