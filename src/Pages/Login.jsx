
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../Hook/hook";
import { Helmet } from "react-helmet";
import SocialUser from './../Components/SocialUser';


const Login = () => {
    const { handleLogin } = useAuth();
    const [check, setCheck] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;




        handleLogin(email, password)
            .then(res => {
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: `Welcome to windDelivery ${res?.user?.displayName || ''}`,
                    text: "That thing is still around?",
                    icon: "question"
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage === 'auth/user-not-found') {
                    Swal.fire({
                        icon: "error",
                        title: "User not found with provided email",
                        text: "Something went wrong!"
                      });

                } else if (errorMessage === 'auth/wrong-password') {
                    Swal.fire({
                        icon: "error",
                        title: "Incorrect password",
                        text: "Something went wrong!"
                      });

                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Your Email or Password is Incorrect",
                        text: "Something went wrong!"
                      });

                }
            })

    }



    return (
        <div className="hero min-h-screen">
            <Helmet><title>Login</title></Helmet>
            <div className="card lg:w-1/3 mx-auto">
                <div className="card-body shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" relative">
                                <input
                                    type={check ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <span className="absolute top-1/3 right-3 cursor-pointer" onClick={() => setCheck(!check)}>{check ? <IoEyeOff /> : <IoEye />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-color2 hover:bg-color2 text-[#fff]">Login</button>
                        </div>
                        <p className="mt-3 text-sm text-center">Do not have an account? <Link to='/registration' className="hover:underline text-color2 font-medium">Registration</Link></p>
                    </form>
                    <SocialUser/>
                </div>
            </div>
        </div>
    );
};

export default Login;