import React, {useState, useEffect} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import { db } from '../../firebase.config';
import Loading from '../loading/loading';
import Error from '../error/error';

const ItemDetail = (props) => {
    const {itemId, page} = props;

    const [activeBtn, setActiveBtn] = useState('addToCart');
    const [appState, setAppState] = useState({
        item: null,
        loading: true,
        error: false
    })

    useEffect( () => {
        let mounted = true;
        mounted && db.collection(page).doc(itemId).get()
        .then( snapshot => {
            snapshot.data() ? setAppState(appState => ({
                item: {...snapshot.data(), id: itemId},
                loading: false,
                error: appState.error
            })) :
            setAppState({
                item: null,
                loading: false,
                error: true
            });
        })
        .catch(err => console.error(err.message));
        return () => mounted = false;
    }, [itemId, page]);

    const toggleBtn = () => {
        setActiveBtn('viewCart');
    }

    useEffect( () => {
        const timerId = setTimeout( () => setActiveBtn('addToCart'), 2000);
        return () => clearInterval(timerId);
    }, [activeBtn]);

    if (appState.loading) {
        return <Loading />;
    }
    if (appState.error) {
        return <Error />;
    }

    return(
        <div className="item-detail_container" > 
        
            <div className="item-detail_img"><img src={appState.item && appState.item.image} alt={appState.item && appState.item.title}/></div>
            
            <div className="item-detail_content">
                <div className="item-detail_title">{appState.item && appState.item.title}</div>
                <div className="item-detail_price">{appState.item && appState.item.price} $</div>  
                <div className="item-detail_text">{appState.item && appState.item.content}</div>
            </div>
            {
                    activeBtn === 'addToCart' ? null : <div className="message">Added to cart</div>
                }  
                {
                    activeBtn === 'addToCart' ? <button className="item-detail_btn" data-id={itemId}
                    onClick={(e) => {                                           
                        props.addToCart(appState.item); // Here possible bug coz of lack of ID
                        toggleBtn();
                        }}>ADD TO CART</button> :
                    <Link to={`${basePath}/cart`}  className="item-detail_btn_viewcart" data-id={itemId}>VIEW CART</Link>
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