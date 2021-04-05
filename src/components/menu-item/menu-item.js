import React from 'react';
import './menu-item.scss';
import toggleButton from '../../local-functions/toggleButton';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const MenuItem = ({item, addToCart}) => {

    const {image, price, title, content, id} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
                <Link to={`${basePath}/item-detail/${id}`}>
                    <img src={image} alt={title}/> 
                </Link>
            </div>
            <div className="menu-item_price">{price} $</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn" data-id={id} onClick={(e) => {
                addToCart();
                toggleButton('.menu-item_btn', '.menu-item_btn_viewcart', e);
                }}>ADD TO CART</button>
            <Link to={`${basePath}/cart`}  className="menu-item_btn_viewcart hidden" data-id={id}>VIEW CART</Link>
            <div className="menu-item_details"><Link to={`${basePath}/item-detail/${id}`}>Details</Link></div><br/>
        </div>
    )
}

export default MenuItem;