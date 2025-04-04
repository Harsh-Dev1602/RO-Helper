import { Link } from "react-router-dom";
import NotFoundI from "../../public/Img/NotFound1.jpg";
function NotFound() {
    return (
        <div className="w-full text-xl flex justify-center items-center gap-5 flex-col h-screen p-13">
             <img src={NotFoundI} className="w-[300px]" />
            <h1 className=" text-6xl">404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link  className="border border-[#ccc] rounded-3xl px-5 py-2 text-blue-700 font-bold hover:text-red-600" to="/">Go back home</Link>
        </div>
    );
}

export default NotFound;
