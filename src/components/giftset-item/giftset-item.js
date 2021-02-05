import React from 'react';
import './giftset-item.scss';
import toggleButton from '../../local-functions/toggleButton';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

const GiftsetItem = ({item, addToCart}) => {

    const {title, image, price, content, id} = item;

    return(
        <div className="giftset_item">
            <div className="giftset_img">
                <Link to={`${basePath}/item-detail/:${id}`}>
                    <img src={image} alt={title}/> 
                </Link>
            </div>
            <div className="giftset_content">
                
                    <div className="giftset_price">{price} $</div>
                    <div className="giftset_title">{title}</div>
                    <div className="giftset_text">{content}</div>
                    <button className="giftset_btn" data-id={id} onClick={(e) => {
                        addToCart();
                        toggleButton('.giftset_btn', '.giftset_btn_viewcart', e);            
                    }}>ADD To CART</button>
                   <Link to={`${basePath}/cart`}  className="giftset_btn_viewcart hidden" data-id={id}>View cart</Link>
                    <div className="giftset_details"><Link to={`${basePath}/item-detail/${id}`}>Details</Link></div>
            </div>
        </div>
    )
}

export default GiftsetItem;

