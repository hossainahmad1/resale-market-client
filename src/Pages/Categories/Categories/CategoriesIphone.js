import { data } from 'autoprefixer';
import React, { useEffect } from 'react';

const CategoriesIphone = () => {

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories/iphone')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])


    return (
        <div>
            <h2>this is a catetgories {data.length} </h2>
        </div>
    );
};

export default CategoriesIphone;