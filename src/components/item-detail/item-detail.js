import React, {useState, useEffect} from 'react';
import './item-detail.scss';
import {connect, useDispatch} from 'react-redux';
import {detailsLoaded, detailsError, comboDetailsRequested, menuDetailsRequested, giftsetDetailsRequested} from '../../redux/actions/detailsAC';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import { getItemById, baseApiUrl } from '../../services/service';
import Loading from '../loading/loading';
import Error from '../error/error';

const ItemDetail = (props) => {
    
    const {itemId, page, details, detailsError, detailsLoaded, detailsRequested} = props;
    
    const [activeBtn, setActiveBtn] = useState('addToCart');

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
        /* let mounted = true;
        detailsRequested();
        mounted && getItemById(`${baseApiUrl}/${page}`, itemId)
        .then(res => {
            res ? detailsLoaded(res) : detailsError();
        })
        .catch(err => console.error(err.message));
        return () => mounted = false; */
    }, [dispatch, page, itemId]);

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn]);

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
    detailsLoaded, 
    detailsError, 
    //detailsRequested,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);