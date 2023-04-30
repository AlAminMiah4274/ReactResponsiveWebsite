import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {

    const categoryNews = useLoaderData();
    useTitle('category');

    return (
        <div>
            <h2>this is Category news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;