import React from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';

const Beverages = () => {
    return (
        <section>
            <div className="heading beverages">
                <div className="heading_small">Your Personalized Coffee</div>
                <div className="heading_big">COFFEE BUILD YOUR BASE</div>
            </div>
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