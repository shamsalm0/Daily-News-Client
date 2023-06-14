import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <div className='flex flex-row justify-between'>
                <div className='w-1/12 lg:block sm:hidden'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div>
                <Outlet></Outlet>
                </div>
                <div className='w-1/12'>
                    <RightSideNav></RightSideNav>
                </div>
            
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;