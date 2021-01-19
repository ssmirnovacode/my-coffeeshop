import React from 'react';
import './giftset.scss';
import Heading from  '../heading/heading';

const GiftSet = () => {
    return(
        <section>
            <Heading small={'Best Gift For Best Friend'} big={'GIFTSET'}/>
            <div className="giftset_container">
                <div className="giftset_img"></div>
                <div className="giftset_content">
                    
                        <div className="giftset_price">15.00 $</div>
                        <div className="giftset_title">Cool giftset</div>
                        <div className="giftset_text">Awesome text description. Awesome text description. Awesome text description. 
                                                        Awesome text description. Awesome text description. Awesome text description. 
                                                        Awesome text description. Awesome text description. </div>
                        <button className="giftset_btn">ORDER NOW</button>
                        <div className="giftset_details"><a href="#">Details</a></div>
                </div>
                <div className="giftset_tabs">
                    <div className="giftset_tabs_item active">1</div>
                    <div className="giftset_tabs_item">2</div>
                    <div className="giftset_tabs_item">3</div>
                </div>
            </div>
        </section>
    )
}

export default GiftSet;