import React, {useState, useEffect, useMemo} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const ItemDetail = (props) => {
    const {itemId} = props;

    const targetItem = props.allItems.find(item => item.id === itemId);

    const {id, image, title, price, content} = targetItem;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn])

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    return(
        <div className="item-detail_container" > 
        
            <div className="item-detail_img"><img src={image} alt={title}/></div>
            
            <div className="item-detail_content">
                <div className="item-detail_title">{title}</div>
                <div className="item-detail_price">{price} $</div>  
                <div className="item-detail_text">{content}</div>
            </div>
            {
                    activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                }  
                {
                    activeBtn === 'addToCart' ? <button className="item-detail_btn" data-id={id}
                    onClick={(e) => {                                           
                        props.addToCart(targetItem);
                        toggleBtn();
                        }}>ADD TO CART</button> :
                    <Link to={`${basePath}/cart`}  className="item-detail_btn_viewcart" data-id={id}>VIEW CART</Link>
                }
            <Link to={`${basePath}/`} className="item-detail_back">Back</Link><br/>
            
                   
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        allItems: state.allItems
        //add giftset - in giftse.js to all ITems
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);