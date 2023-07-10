import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import './Main.css'
const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <div className='lg:flex flex-row justify-between whole-side'>
                <div className='w-1/12 lg:block sm:hidden left-side'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div>
                <Outlet></Outlet>
                </div>
                <div className='w-1/12 right-side'>
                    <RightSideNav></RightSideNav>
                </div>
            
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;