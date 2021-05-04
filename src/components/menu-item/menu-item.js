import React, {useState} from 'react';
import './menu-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const MenuItem = ({item, addToCart}) => {

    const [activeBtn, setActiveBtn] = useState('addToCart');

    const toggleBtn = () => {
        setActiveBtn('viewCart');
        setTimeout( () => setActiveBtn('addToCart'), 2000);
    }

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
            <div className="menu-item_content">{content}</div><br/>
            <div className="menu-item_btns">
                {
                    activeBtn === 'addToCart' ? <button className="menu-item_btn" data-id={id} onClick={(e) => {
                        addToCart();
                        toggleBtn();
                        }}>ADD TO CART</button> :
                        <button className="menu-item_btn_viewcart" data-id={id}><Link to={`${basePath}/cart`} >VIEW CART</Link></button> 
                }
                <div className="menu-item_details"><Link to={`${basePath}/item-detail/${id}`}>Details</Link></div><br/>
                {
                    activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                }
            </div>
            
        </div>
    )
}

export default MenuItem;