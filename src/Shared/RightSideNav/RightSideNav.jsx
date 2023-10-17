import {BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bS";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import q_zone1 from './../../assets/qZone1.png';
import q_zone2 from './../../assets/qZone2.png';
import q_zone3 from './../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="border text-xl p-5 space-y-3"> 
                <h1 className="text-xl font-[600]">Login with</h1>                
                <button className="btn btn-outline normal-case  w-full"><BiLogoGoogle></BiLogoGoogle> Login with Google </button>
                <button className="btn btn-outline normal-case  w-full"><BiLogoGithub></BiLogoGithub> Login with Github </button>
            </div>
            <div className="border p-5  text-xl space-y-3 mt-5"> 
                <h1 className="text-xl font-[600]">Find Us On</h1>                
                <div className="flex flex-col gap-3 w-2/3">
                    <a href="" target="blank" className="btn btn-outline normal-case"><BsFacebook></BsFacebook> Facebook </a>
                    <a href="" target="blank" className="btn btn-outline normal-case"><AiFillTwitterCircle></AiFillTwitterCircle> Twiter </a>
                    <a href="" target="blank" className="btn btn-outline normal-case"><AiOutlineInstagram></AiOutlineInstagram> Instagram </a>
                </div>
            </div>
            <div className="border bg-[#F3F3F3] p-3">
                <h1 className="text-xl font-[600]">Q Zone</h1>
                <img src={q_zone1} alt="" />
                <img src={q_zone2} alt="" />
                <img src={q_zone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;