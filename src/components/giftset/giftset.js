import React from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';

const GiftSet = () => {
    return(
        <section>
            <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'}/>
            <div className="giftset_container">
                <div className="giftset_image"><img src="https://www.pinclipart.com/picdir/middle/9-98243_gift-clipart-small-gift-imagens-de-caixas-de.png" alt="giftset"/></div>
                <div className="giftset_content">
                    <div className="giftset_price">15.00 $</div>
                    <div className="giftset_title">Cool giftset</div>
                    <div className="giftset_text">Awesome text description. Awesome text description. Awesome text description. 
                                                    Awesome text description. Awesome text description. Awesome text description. 
                                                    Awesome text description. Awesome text description. </div>
                    <button className="giftset_btn">ORDER NOW</button>
                    <div className="giftset_details"><a href="#">Details</a></div>

                </div>
            </div>
        </section>
    )
}

export default GiftSet;