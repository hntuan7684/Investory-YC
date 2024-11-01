// Sidebar.tsx
import { FaHome } from 'react-icons/fa';

interface SidebarProps {
    sidebarToggle: boolean;
}

const Sidebar = ({ sidebarToggle }: SidebarProps) => {
    return (
        <>
            <div className={`${sidebarToggle ? "hidden" : "block"} w-64 fixed h-full bg-gray-800 px-4 py-2`}>
                <div className='my-2 mb-4'>
                    <h1 className="text-2xl text-white font-bold">Dashboard</h1>
                </div>
                <hr />
                <ul className='mt-3 text-white font-bold'>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' /> Home
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' /> Home
                        </a>
                    </li>
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                        <a href="" className='px-3'>
                            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' /> Home
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
