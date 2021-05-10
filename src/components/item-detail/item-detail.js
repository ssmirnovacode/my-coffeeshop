import React, {useState, useEffect, useMemo} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/actions/cartAC';
//import toggleButton from '../../local-functions/toggleButton';
import {Link} from 'react-router-dom';
import basePath from '../../assets/basePath';
import firebase from '../../firebase.config';

const ItemDetail = (props) => {
    const {itemId} = props;

    const [localState, setLocalState] = useState({
        item: null,
        loading: true,
        error: false
    });

    const itemRef = useMemo( () => firebase.database().ref('menuItems'), []);

    useEffect( () => {
        itemRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };

                setLocalState({
                    item: itemList.filter(item => item.id === itemId)[0],
                    loading: false,
                    error: false
                });
                console.log(`Item received from server`);
            }
            else {
                setLocalState((localState) => ({
                    item: localState.item,
                    loading: false,
                    error: true
                }));
                console.log(`ERROR in fetching`);
            }
        });
    }, [itemRef, itemId])
    /* const allItems = [...props.menuItems, ...props.combos, ...props.giftset.items]; // 2 из 3 массивов не загрузятся, но нужный будет
    const item = allItems.filter(item => item.id === itemId)[0];  */
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
        menuItems: state.menuItems,
        combos: state.combos,
        giftset: state.giftset
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);