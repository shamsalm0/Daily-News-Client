import React, { useContext } from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider';
import './Header.css'
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <div>
        <div className="mb-4 navbar bg-green-300">
  <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        <div className='lg:invisible sm:visible'>
            <LeftSideNav ></LeftSideNav>
            </div>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link className="btn btn-ghost normal-case text-xl" to='/'>DailyNews</Link>
  </div>
  <div className="navbar-end">
    {
      user?.uid?<>
    <p>{user?.displayName}</p>
        {
          user?.photoURL?<img src={user?.photoURL} style={{height:'40px',width:'40px',borderRadius:'10px'}} alt="" srcset="" />:
         <Link to='/profile'><FaUser></FaUser></Link> 
        }
        
        <button onClick={logOut} className='btn  btn-info mr-6'><Link className='text-bold log' to='/signin'>Sign Out</Link></button>
      </>:
      <>
      <button className='btn  btn-info mr-6'><Link className='text-bold log' to='/signin'>Sign In</Link></button>
      <button className='btn  btn-info '><Link className='text-bold log' to='/signup'>Sign Up</Link></button>
      </>
    }
  </div>
</div>
        </div>
    );
};

export default Header;