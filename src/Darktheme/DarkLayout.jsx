// Layout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function DarkLayout() {
    return (
        <>
        <div className='bg-[#16273E] text-white'>
        <Navbar />
        </div>
        <div className="flex  bg-[#16283E]">
            <Sidebar />
            <div className="flex-1 p-4 bg-[#16283E] text-white">
                <Outlet />
            </div>
        </div>
      <div className='bg-[#16283E] text-white'>
        <Footer />
        </div>
        </>
    );
}
