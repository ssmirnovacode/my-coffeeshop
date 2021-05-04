import React, {useState} from 'react';
import './combo-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const ComboItem = ({item, addToCart}) => {

    const {title, image, price, content, id} = item;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    const toggleBtn = () => {
        setActiveBtn('viewCart');
        const timerId = setTimeout( () => {setActiveBtn('addToCart'); clearInterval(timerId);}, 2000);
    }

    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
                <Link to={`${basePath}/item-detail/${id}`}>
                    <img src={image} alt={title}/> 
                </Link>
            </div>
            
            <div className="combo-item_title">{title}</div>
            <div className="combo-item_price">{price} $<span>6.00 $</span></div> 
            <div className="combo-item_content">{content}</div>
            {
                  activeBtn === 'addToCart' ? <button className="combo-item_btn" data-id={id} onClick={(e) => {
                    addToCart();
                    toggleBtn();
                }}>ADD TO CART</button> :
                <Link to={`${basePath}/cart`}  className="combo-item_btn_viewcart" data-id={id}>VIEW CART</Link>
            }
            <div className="combo-item_details"><Link to={`${basePath}/item-detail/${id}`}>Details</Link></div><br/>
            {
                    activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                }
        </div>
    )
}

export default ComboItem;