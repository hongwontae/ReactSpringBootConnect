import { Link } from "react-router-dom";

const SampleNav = () => {
    return (
        <div className="flex m-6 p-6 text-black font-extrabold justify-center">
          
            <div className="m-5 text-4xl border-2 text-black">
                <Link to="/">Main</Link>
            </div>
            <div className="m-5 text-4xl border-2 text-black">
                <Link to="/about">About</Link>
            </div>
            <div className="m-5 text-4xl border-2 text-black">
                <Link to="/board/list">Board</Link>
            </div>
        </div>
    );
}

export default SampleNav;