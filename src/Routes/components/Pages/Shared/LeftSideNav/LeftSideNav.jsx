import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className=''>
            <h4>All Category</h4>
            {
                categories.map(category=><p className='text-current' key={category.id}><Link className='text-blue-600 ' to={`/category/:${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;