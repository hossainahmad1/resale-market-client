import React from 'react';
import Bannar from '../Bannar/Bannar';
import HomeCart from '../HomeCart/HomeCart';
import HomeDesign from '../HomeDesign/HomeDesign';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HomeDesign></HomeDesign>
            <Products></Products>
            <HomeCart></HomeCart>
        </div>
    );
};

export default Home;