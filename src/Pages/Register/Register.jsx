import { NavLink } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photoUrl=form.get('photo');
        const email=form.get('email');
        const password=form.get('password')
        console.log(name,photoUrl,email,password);
        createUser(email,password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Yes...',
                    text: 'You have successfully registered',                    
                  })
            })
            .then(error=>{
                console.log(error);
            });
    }
    return (
        <div className="bg-[#F3F3F3] py-16">
        <Navbar></Navbar>
        <h1 className="text-3xl text-center font-semibold my-5">Please Register</h1>
        <form onSubmit={handleRegister} className=" mx-auto lg:w-1/3 md:w-1/3">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                 <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                 <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
                
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
            </div>
        </form>
        <p className="text-center text-sm mt-3">Allready have an account? Please <NavLink to={'/login'} className='text-red-600 underline font-semibold'>Login</NavLink></p>
    </div>
    );
};

export default Register;