import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNewsCard from '../Pages/Shared/CategoryNewsCard/CategoryNewsCard';

const Home = () => {
    const allNews=useLoaderData();

    return (
        <div>
            <h2>This is home:{allNews.length}</h2>
            {
                allNews.map(news=><CategoryNewsCard key={news._id} news={news}></CategoryNewsCard>)
            }
        </div>
    );
};

export default Home;