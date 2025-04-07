import { Link } from 'react-router-dom';
import { LuHouse, LuUsers, LuClipboardList } from 'react-icons/lu';

export default function Sidebar () {
    return (
        <nav className='fixed flex flex-col gap-2 top-0 bg-blue-900 text-white h-[100vh] w-[300px] p-2 shadow-stone-900'>
            <div className="gap-2 py-2 px-4 items-center justify-center border-b-3 border-[rgba(0,0,0,0.1)] flex mb-2">
                <span className="font-bold p-3">Application Development</span>
            </div>
            <Link 
                to="/" 
                className="flex items-center gap-2 mx-4 p-2 transition-all hover:bg-blue-300 hover:text-blue-800 hover:shadow-lg hover:scale-105 rounded-lg">
                <LuHouse /> Dashboard
            </Link>
            <Link 
                to="/customers" 
                className="flex items-center gap-2 mx-4 p-2 transition-all hover:bg-blue-300 hover:text-blue-800 hover:shadow-lg hover:scale-105 rounded-lg">
                <LuUsers /> Customers
            </Link>
            <Link 
                to="/tasks" 
                className="flex items-center gap-2 mx-4 p-2 transition-all hover:bg-blue-300 hover:text-blue-800 hover:shadow-lg hover:scale-105 rounded-lg">
                <LuClipboardList /> Task Manager
            </Link>
        </nav>
    );
}
