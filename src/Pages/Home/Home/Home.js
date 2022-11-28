import React from 'react';
import Bannar from '../Bannar/Bannar';
import HomeCart from '../HomeCart/HomeCart';
import HomeDesign from '../HomeDesign/HomeDesign';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <HomeDesign></HomeDesign>
            <Bannar></Bannar>
            <Products></Products>
            <HomeCart></HomeCart>
        </div>
    );
};

export default Home;