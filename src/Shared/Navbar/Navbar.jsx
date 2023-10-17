import { NavLink } from "react-router-dom";
import userPicture from './../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log('user',user)
    const links= <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>        
        <li><NavLink to={'/login'}>Login</NavLink></li>        
        <li><NavLink to={'/register'}>Register</NavLink></li>        
    </>
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            
            Swal.fire({
                icon: 'success',
                title: 'Yes...',
                text: 'You have successfully log out',
                
              })
        })
        .then(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userPicture} />
                    </div>
                </label>
                {
                    user? 
                    <button onClick={handleLogOut} className="btn btn-sm btn-accent normal-case">Log Out</button>
                    :
                    <NavLink to={'/login'} className="btn normal-case">Login</NavLink>
                }
                
            </div>
        </div>
    );
};

export default Navbar;