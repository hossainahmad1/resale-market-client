import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesCart from './CategoriesCart';

const Categories = () => {
    const datas = useLoaderData()

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(data => <CategoriesCart
                        key={data._id}
                        data={data}
                    ></CategoriesCart>)
                }
            </div>
        </div>
    );
};

export default Categories;