import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './news.css'
const News = () => {
   const news=useLoaderData();
   console.log(news);
   const {_id,title,image_url,details}=news;
    return (
        <div>
            <div className="news card  bg-base-100 shadow-xl">
            <h2 className="card-title">{title}</h2>
  <div className="card-body">
    <img src={image_url} alt="" srcset="" />
    <p>{details}</p>
    <div className="card-actions ">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default News;