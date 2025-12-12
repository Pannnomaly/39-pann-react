import { Link } from "react-router-dom";

export default function Navbar ()
{
    return (
        <nav className="p-4 shadow-md bg-pink-200">
            <ul className="flex justify-end items-center gap-2 font-bold text-xl">
                <li className="px-5 py-3 rounded-md hover:bg-pink-300 hover:text-pink-100 transition duration-300 ease-in-out cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-5 py-3 rounded-md hover:bg-pink-300 hover:text-pink-100 transition duration-300 ease-in-out cursor-pointer">
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    );
}