import React, {Component} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested } from '../../actions/menu-itemsAC';
import {addToCart, deleteFromCart} from '../../actions/cartAC';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';

class Menu extends Component {

    componentDidMount() {
        this.props.menuItemsRequested();

        const requestService = new RequestService();

        requestService.getMenuItems(baseURL+'menuItems')
        //.then(res => console.log(res))
        .then(res => this.props.menuItemsLoaded(res))
        .catch( () => this.props.menuItemsError());
    }

    render() {

        const {menuItems, /* loading, error */} = this.props;

        /* if (loading) {
            return(
                <Loading/>
            )
        }

        else if (error) {
            return {
                <Error/>
            }
        } */

        return(
            <section className="stripe-left">
                <Heading small={'Choose Your Favorite'} big={'ORDER YOUR DRINK ONLINE'} id="menu"/>
                <div className="menu_container">
                    {
                        menuItems.map(item => {
                            return (
                                <MenuItem key={item.id} item={item} toggleModal={this.props.toggleModal} 
                                addToCart={() => this.props.addToCart(item)} /* deleteFromCart={() => deleteFromCart(item.id)} *//>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menuItems,
        loading: state.loading,
        error: state.error,
        modal: state.modal, //delete?
        cart: state.cart //delete?
    }
}

const mapDispatchToProps = {
    menuItemsLoaded,
    menuItemsRequested,
    menuItemsError,
    toggleModal,
    addToCart,
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);