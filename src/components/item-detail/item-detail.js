import React, {useState} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
//import toggleButton from '../../local-functions/toggleButton';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const ItemDetail = (props) => {
    const {itemId} = props;
    const allItems = [...props.menuItems, ...props.combos, ...props.giftset.items]; // 2 из 3 массивов не загрузятся, но нужный будет
    const item = allItems.filter(item => item.id === itemId)[0]; 
    const {id, image, title, price, content} = item;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    const toggleBtn = () => {
        setActiveBtn('viewCart');
        const timerId = setTimeout( () => {setActiveBtn('addToCart'); clearInterval(timerId);}, 2000);
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
                        props.addToCart(item);
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
        menuItems: state.menuItems,
        combos: state.combos,
        giftset: state.giftset
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);