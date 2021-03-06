import React, {useState, useEffect} from 'react';
import './combo-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const ComboItem = ({item, addToCart}) => {

    const {title, image, price, content, id} = item;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn])

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    return (
        <div className="combo-item_container">
            <div className="combo-item_img">
                <Link to={`${basePath}/combos/${id}`}>
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
                <div className="combo-item_msg-btn-box">
                    <Link to={`${basePath}/cart`}  className="combo-item_btn_viewcart" data-id={id}>VIEW CART</Link>
                    {
                    activeBtn === 'addToCart' ? null : <div className="combo-item_msg-btn-box_message">Added to cart!</div>
                    }
                </div>
                
            }
            <div className="combo-item_details"><Link to={`${basePath}/combos/${id}`}>Details</Link></div><br/>
            
        </div>
    )
}

export default ComboItem;