import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNewsCard from '../Pages/Shared/CategoryNewsCard/CategoryNewsCard';

const Category = () => {
    const allNews=useLoaderData();
    console.log(allNews)
    return (
        <div>
            <h2>This is category:{allNews.length}</h2>
            {
                allNews.map(news=><CategoryNewsCard key={news._id} news={news}></CategoryNewsCard>)
            }
        </div>
    );
};

export default Category;