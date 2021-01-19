import React from 'react';
import './combo.scss';
import Heading from '../heading/heading';
import ComboItem from '../combo-item/combo-item';

const Combo = () => {
    return(
        <section>
            <Heading small={'Your Personalized Coffee'} big={'OUR COMBOS'}/>
            <div className="combo_container">
                <ComboItem/>
                <ComboItem/>
                <ComboItem/>
            </div>
        </section>
    )
}

export default Combo;