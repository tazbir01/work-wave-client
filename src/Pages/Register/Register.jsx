import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useAuth()


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-300">
            <Helmet>
                <title>Work Wave | Register</title>
            </Helmet>
            <Link to="/"><div className=" absolute top-10 left-10 md:left-20 text-xl"><FaArrowLeft></FaArrowLeft></div></Link>
            <div className="hero-content flex-col w-full md:w-3/5 lg:w-2/3">
                <div className="text-center lg:text-left">
                    <h1 className="md:text-4xl hidden lg:block lg:text-5xl font-bold">Register now!</h1>
                </div>
                <p className="text-red-600">Fields marked * are required</p>
                <div className="card w-full  ">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password*</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password",{
                                minLength: 6,
                                pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/
                            })} className="input input-bordered" required />
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-600'>password must be 6 character.</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>add a capital letter and speacial character</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name*</span>
                            </label>
                            <input type="text" placeholder="full name" {...register("name")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation*</span>
                            </label>
                            <input type="text" placeholder="designation" {...register("designation")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bank Account No.*</span>
                            </label>
                            <input type="number" placeholder="bank account no." {...register("bank_acount")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary*</span>
                            </label>
                            <input type="number" placeholder="salary" {...register("salary")} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Role*</span>
                            </label>
                            <select defaultValue="default" {...register("role", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a role</option>
                                <option value="hr">HR</option>
                                <option value="employe">Employee</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Your Photo*</span>
                            </label>
                            <input type="file" {...register("photo", {required: true})} className="file-input w-full max-w-xs" />
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