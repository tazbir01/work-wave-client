import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"

const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-base-300">
        <Helmet>
            <title>Work Wave | Register</title>
        </Helmet>
        <Link to="/"><div className=" absolute top-10 left-10 md:left-20 text-xl"><FaArrowLeft></FaArrowLeft></div></Link>
        <div className="hero-content flex-col w-full md:w-3/5 lg:w-1/3">
            <div className="text-center lg:text-left">
                <h1 className="md:text-4xl hidden lg:block lg:text-5xl font-bold">Register now!</h1>
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
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mb-8 font-bold">Have You&#39;r Account? <Link className="text-lg font-bold text-blue-600" to="/login">please Login.</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;