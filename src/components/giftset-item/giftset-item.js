import React, {useState} from 'react';
import './giftset-item.scss';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const GiftsetItem = ({item, addToCart}) => {

    const {title, image, price, content, id} = item;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    const toggleBtn = () => {
        setActiveBtn('viewCart');
        const timerId = setTimeout( () => {setActiveBtn('addToCart'); clearInterval(timerId);}, 2000);
    }

    return(
        <div className="giftset_item">
            <div className="giftset_img">
                <Link to={`${basePath}/item-detail/${id}`}>
                    <img src={image} alt={title}/> 
                </Link>
            </div>
            <div className="giftset_content">
                
                    <div className="giftset_price">{price} $</div>
                    <div className="giftset_title">{title}</div>
                    <div className="giftset_text">{content}</div>
                    {
                        activeBtn === 'addToCart' ? <button className="giftset_btn" data-id={id} onClick={(e) => {
                            addToCart();
                            toggleBtn();            
                        }}>ADD TO CART</button> :
                        <Link to={`${basePath}/cart`}  className="giftset_btn_viewcart" data-id={id}>VIEW CART</Link>
                    }
                    <div className="giftset_details"><Link to={`${basePath}/item-detail/${id}`}>Details</Link></div><br/>
                    {
                    activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                }
            </div>
        </div>
    )
}

export default GiftsetItem;

