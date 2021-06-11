import React, {useState, useEffect} from 'react';
import './giftset-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const GiftsetItem = ({item, addToCart}) => {

    const {title, image, price, content, id} = item;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn])

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    return(
        <div className="giftset_item">
            <div className="giftset_img">
                <Link to={`${basePath}/giftset/${id}`}>
                    <img src={image} alt={title}/> 
                </Link>
            </div>
            <div className="giftset_content">
                    <div className="giftset_price">{price} $</div>
                    <div className="giftset_title">{title}</div>
                    <div className="giftset_text">{content}</div>
                    <div className="giftset_wrapper">
                    <div className="giftset_btns">
                        {
                            activeBtn === 'addToCart' ? <button className="giftset_btn" data-id={id} onClick={(e) => {
                                addToCart();
                                toggleBtn();            
                            }}>ADD TO CART</button> :
                            <div className="giftset-item_msg-btn-box">
                                <Link to={`${basePath}/cart`}  className="giftset_btn_viewcart" data-id={id}>VIEW CART</Link>
                                {
                                    activeBtn === 'addToCart' ? null : <div className="giftset-item_msg-btn-box_message">Added to cart!</div>
                                }
                            </div>
                        }
                        <div className="giftset_details"><Link to={`${basePath}/giftset/${id}`}>Details</Link></div><br/>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default GiftsetItem;

