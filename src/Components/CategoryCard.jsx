

import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategoryCard = () => {
    const data = useLoaderData();
    const { category } = useParams();


    const filteredData = category && category !== "All"
        ? data?.filter(item => item.category.name.toLowerCase() === category.toLowerCase())
        : data;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredData?.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CategoryCard;

