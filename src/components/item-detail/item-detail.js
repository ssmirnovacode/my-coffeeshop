import React, {useState, useEffect, useMemo} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';

const ItemDetail = (props) => {
    const {itemId} = props;
    console.log(props.allItems[itemId]);

    const [localState, setLocalState] = useState({
        item: props.allItems[itemId],
        loading: true,
        error: false
    });
    console.log(localState.item);

    /* useEffect( () => {
        const targetItem = props.allItems.find(item => item.id === itemId); 
        console.log(targetItem);
        setLocalState(targetItem);
    }, [itemId]) */

    const {id, image, title, price, content} = localState.item;

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
                        props.addToCart(localState.item);
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