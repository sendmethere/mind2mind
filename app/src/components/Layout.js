import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Header';

function Layout({children}) {
    return (
        <div className="md:w-screen md:h-screen"
        style={{"background": "#f4f5f6"}} >
            <Navbar/>
            <div className='flex justify-center py-8'>
                <div className='rounded bg-white px-4 py-4'
                     style={{width:"840px"}}>
                    <Outlet />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;