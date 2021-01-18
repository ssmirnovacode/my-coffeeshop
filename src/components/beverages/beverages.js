import React from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';

const Beverages = () => {
    return (
        <section>
            <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'}/>
            <div className="beverages_container">
                <BeverageItem/>
                <BeverageItem/>
                <BeverageItem/>
                <BeverageItem/>

            </div>
        </section>
    )
}

export default Beverages;