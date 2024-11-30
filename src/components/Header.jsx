import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex flex-col my-10">
            <div className="flex w-full justify-between">
                <Link to="/" className="font-normal text-base mb-4">marco maraglino</Link>
                <h1 className="opacity-50 text-base">sw engineer</h1>
            </div>
            <hr className="w-full bg-gray-100/50 mb-4 border-indigo-50/30 rounded dark:bg-gray-500/50"/>
            <nav className="flex flex-col">
                <ul className="text-base flex flex-col items-start">
                    <li><Link to="/work"
                          className="font-normal hover:opacity-100 hover:p-2.5 hover:duration-100 duration-100 opacity-50">work</Link>
                    </li>
                    <li><Link to="/projects"
                          className="font-normal hover:opacity-100 hover:p-2.5 hover:duration-100 duration-100 opacity-50">projects</Link>
                    </li>
                    <li><Link to="/social"
                          className="font-normal hover:opacity-100 hover:p-2.5 hover:duration-100 duration-100 opacity-50">social</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
