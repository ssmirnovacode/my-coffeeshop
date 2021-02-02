import React from 'react';
import './menu-item.scss';
import toggleButton from '../../local-functions/toggleButton';
import {Link} from 'react-router-dom';
import basePath from '../../services/basePath';

const MenuItem = ({item, toggleModal, addToCart}) => {

    const {image, price, title, content, id} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
               <img src={image} alt={title} onClick={() => toggleModal(item)}/> 
            </div>
            <div className="menu-item_price">{price} $</div>
            <div className="menu-item_title">{title}</div>
            <div className="menu-item_content">{content}</div>
            <button className="menu-item_btn" data-id={id} onClick={(e) => {
                addToCart();
                toggleButton('.menu-item_btn', '.menu-item_btn_viewcart', e);
                }}>ADD To CART</button>
            <button className="menu-item_btn_viewcart hidden" data-id={id}>
                <Link to={`${basePath}/cart`}>View cart</Link>
            </button>
            <div className="menu-item_details" onClick={() => toggleModal(item)}>Details</div>
        </div>
    )
}

export default MenuItem;