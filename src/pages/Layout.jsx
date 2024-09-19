import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div className="flex flex-col container max-sm:w-72 mx-auto w-screen h-full">
            <div className="flex flex-col absolute container max-sm:w-72 top-10 pb-10 w-full py-4">
            <div className="flex justify-between">
                <Link to="/" className="font-normal text-base mb-4">marco maraglino</Link>
                <h1 className="opacity-50 text-base flex justify-end">sw engineer</h1>
            </div>
            <hr className="w-full h-1/6 mx-auto bg-gray-100/50 mb-4 border-indigo-50/30 rounded dark:bg-gray-500/50"/>
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
            <Outlet/>
        </div>
</>
)
};

export default Layout;