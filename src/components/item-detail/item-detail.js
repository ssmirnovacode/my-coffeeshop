import React, {useState, useEffect} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {detailsLoaded, detailsError, detailsRequested} from '../../redux/actions/detailsAC';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import { db } from '../../firebase.config';
import Loading from '../loading/loading';
import Error from '../error/error';

const ItemDetail = (props) => {
    const {itemId, page, details, detailsError, detailsLoaded, detailsRequested} = props;

    const [activeBtn, setActiveBtn] = useState('addToCart');

    useEffect( () => {
        let mounted = true;
        detailsRequested();
        mounted && db.collection(page).doc(itemId).get()
        .then( snapshot => {
            snapshot.data() ? detailsLoaded(snapshot.data()) :
            detailsError();
            console.log('Deatils loaded');
        })
        .catch(err => console.error(err.message));
        return () => mounted = false;
    }, [itemId, page, detailsError, detailsLoaded, detailsRequested]);

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
                details.loading ? <Loading /> : details.error ? <Error /> :
                <>
                    <div className="item-detail_img"><img src={details.item.image} alt={details.item.title}/></div>
            
                    <div className="item-detail_content">
                        <div className="item-detail_title">{details.item.title}</div>
                        <div className="item-detail_price">{details.item.price} $</div>  
                        <div className="item-detail_text">{details.item.content}</div>
                    </div>
                    {
                            activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                        }  
                        {
                            activeBtn === 'addToCart' ? <button className="item-detail_btn" data-id={itemId}
                            onClick={(e) => {                                           
                                props.addToCart(details.item); 
                                toggleBtn();
                                }}>ADD TO CART</button> :
                            <Link to={`${basePath}/cart`}  className="item-detail_btn_viewcart" data-id={itemId}>VIEW CART</Link>
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
    detailsRequested,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);