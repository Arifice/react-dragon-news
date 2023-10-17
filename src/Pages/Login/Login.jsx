/* eslint-disable react/no-unescaped-entities */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";
const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    console.log('login location',location);
    
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Yes...',
                text: 'You have successfully login',                    
              })
            navigate(location?.state? location.state:'/');
        })
    }
    return (
        <div className="bg-[#F3F3F3] py-16">
            <Navbar></Navbar>
            <h1 className="text-3xl text-center font-semibold my-5">Please Login</h1>
            <form onSubmit={handleLogin} className=" mx-auto lg:w-1/3 md:w-3/4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Login</button>
                </div>
            </form>
            <p className="text-center text-sm mt-3">Don't have an account? Please <NavLink to={'/register'} className='text-red-600 underline font-semibold'>Register</NavLink></p>
        </div>
    );
};

export default Login;