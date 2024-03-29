import React, {useEffect} from 'react';
import './item-detail.scss';
import {connect, useDispatch} from 'react-redux';
import {comboDetailsRequested, menuDetailsRequested, giftsetDetailsRequested} from '../../redux/actions/detailsAC';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import Loading from '../loading/loading';
import Error from '../error/error';
import useToggleBtn from '../../hooks/useToggleBtn';

const ItemDetail = (props) => {
    
    const {itemId, page, details} = props;

    const dispatch = useDispatch();

    useEffect( () => {
        if (page === 'combos') {
            dispatch(comboDetailsRequested(itemId))
        }
        else if (page === 'giftset') {
            dispatch(giftsetDetailsRequested(itemId))
        }
        else {
            dispatch(menuDetailsRequested(itemId))
        }
    }, [dispatch, page, itemId]);

    const [activeBtn, toggleBtn] = useToggleBtn();

    return(
        <div className="item-detail_container" > 
            {
                details.loading ? <Loading /> : details.error ? <Error text='Sorry, the beverage was not found' /> :
                <>
                    <div className="item-detail_img"><img src={details.item.image} alt={details.item.title}/></div>
            
                    <div className="item-detail_content">
                        <div className="item-detail_title">{details.item.title}</div>
                        <div className="item-detail_price">{details.item.price} $</div>  
                        <div className="item-detail_text">{details.item.content}</div>
                    </div>
                     
                        {
                            activeBtn === 'addToCart' ? <button className="item-detail_btn" data-id={itemId}
                            onClick={(e) => {                                           
                                props.addToCart(details.item); 
                                toggleBtn();
                                }}>ADD TO CART</button> :
                                <div className="item-detail_msg-btn-box">    
                                    <Link to={`${basePath}/cart`}  className="item-detail_btn_viewcart" data-id={itemId}>VIEW CART</Link>
                                    {
                                        activeBtn === 'addToCart' ? null : <div className="item-detail_msg-btn-box_message">Added to cart!</div>
                                    } 
                                </div>
                        }
                    <Link to={`${basePath}/`} className="item-detail_back">Back</Link><br/>
                </>
            }
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        details: state.details
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);