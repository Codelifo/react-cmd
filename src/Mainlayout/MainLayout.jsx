import React from 'react';
import { Outlet } from 'react-router-dom';
import DropDown from './DropDown';

const MainLayout = () => {
    return (
        <div className='grid grid-cols-3 divide-x divide-gray-500 divide-dashed py-4'>
            <div className="text-center pt-8  col-span-1">
                <DropDown></DropDown>
            </div>
            <div className="w-full mt-8
             col-span-2 px-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;