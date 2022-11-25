import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../BuyModal/BuyModal';
import CategoriesCart from './CategoriesCart';

const Categories = () => {
    const datas = useLoaderData()
    const [products, setProducts] = useState(null)
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(data => <CategoriesCart
                        key={data._id}
                        data={data}
                        setProducts={setProducts}
                    ></CategoriesCart>)
                }
            </div>
           { 
            products &&
           <BuyModal
                products={products}
            ></BuyModal>}
        </section>
    );
};

export default Categories;