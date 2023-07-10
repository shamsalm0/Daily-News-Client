import React from 'react';
import { Link } from 'react-router-dom';
import {FaShareAlt,FaBookmark, FaStar, FaEye} from "react-icons/fa";

const CategoryNewsCard = ({news}) => {
    const{_id,title,image_url,details,author,total_view,rating}=news
    return (
        <div>
            <div className="card lg:w-96  bg-base-100 shadow-xl mb-4 sm:w-72 ">
  <div className="card-body">

   <header className="flex justify-between">
   <div className="flex">
<img style={{height:'60px',border:'1px solid orange',borderRadius:'20px'}} className='rounded-md' src={author.img} alt="" srcset="" />
<div>
  <p className='sm:text-xs lg:text-sm md:text-sm'>{author.name}</p>
  <p className='sm:text-xs lg:text-xs md:text-xs'>{author.published_date}</p>
</div>
    </div>

    <div>
    <FaShareAlt className='mb-1'></FaShareAlt>
<FaBookmark></FaBookmark>
    </div>
   </header>

    <h2 className="card-title">{title}</h2>
    <figure><img src={image_url} alt="Img" /></figure>
    <p className='card-body '>
    {
        details.length>150?<p className='sm:text-xs lg:text-base'>{details.slice(0,150) +'...'} <Link to={`/news/${_id}`}>read more</Link></p>:
        <p>{details}</p>
      }
    </p>
  </div>
  
  <div className="flex justify-between">
  <footer><FaStar></FaStar>{rating.number}</footer>
    <footer><FaEye></FaEye>{total_view}</footer>
  </div>
</div>
        </div>
    );
};

export default CategoryNewsCard;