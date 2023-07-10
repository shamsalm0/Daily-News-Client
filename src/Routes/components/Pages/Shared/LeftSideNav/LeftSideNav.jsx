import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'
const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:9000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className=''>
            <h4 className='lg:visible md:visible sm:invisible'>All Category</h4>
            {
                categories.map(category=><p className='text-current  news-name' key={category.id}><Link className='text-blue-600  ' to={`/category/0${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;