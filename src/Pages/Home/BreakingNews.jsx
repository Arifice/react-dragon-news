import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex p-2 bg-[#F3F3F3]">
            <button className="btn btn-secondary">Breaking News</button>
             <Marquee pauseOnClick={true} speed={200} className="text-green-600 text-2xl">
                    <Link className="mr-10" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-10" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-10" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                    <Link className="mr-10" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;