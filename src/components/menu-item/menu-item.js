import React, {useState, useEffect} from 'react';
import './menu-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const MenuItem = ({item, addToCart}) => {

    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn])

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    const {image, price, title, content, id} = item;
    return (
        <div className="menu-item_container">
            <div className="menu-item_img">
                <Link to={`${basePath}/menuItems/${id}`}>
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
                        <div className="menu-item_msg-btn-box">
                            <button className="menu-item_btn_viewcart" data-id={id}><Link to={`${basePath}/cart`} >VIEW CART</Link></button>
                            {
                                activeBtn === 'addToCart' ? null : <div className="menu-item_msg-btn-box_message">Added to cart!</div>
                            }
                        </div>
                }
                <div className="menu-item_details"><Link to={`${basePath}/menuItems/${id}`}>Details</Link></div><br/>
                
            </div>
            
        </div>
    )
}

export default MenuItem;