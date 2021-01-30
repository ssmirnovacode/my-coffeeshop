import React, {Component} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested } from '../../actions/menu-itemsAC';
import {addToCart, deleteFromCart, toggleCart} from '../../actions/cartAC';
import {toggleModal} from '../../actions/modal';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Menu extends Component {

    componentDidMount() {
        this.props.menuItemsRequested();

        const requestService = new RequestService();

        requestService.getMenuItems(baseURL+'menuItems')
        .then(res => this.props.menuItemsLoaded(res))
        .catch( () => this.props.menuItemsError());
    }

    render() {

        const {menuItems, loading, error} = this.props;

        if (loading) {
            return(
                <Loading/>
            )
        }

        else if (error) {
            return (
                <Error/>
            )
        }

        return(
            <section className="stripe-left">
                <Heading small={'Choose Your Favorite'} big={'ORDER YOUR DRINK ONLINE'} id="menu"/>
                <div className="menu_container">
                    <div className="bg-menu"></div>
                    {
                        menuItems.map(item => {
                            return (
                                <MenuItem key={item.id} item={item} toggleModal={this.props.toggleModal} 
                                addToCart={() => this.props.addToCart(item)} toggleCart={() => this.props.toggleCart()}/>
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
        error: state.error
    }
}

const mapDispatchToProps = {
    menuItemsLoaded,
    menuItemsRequested,
    menuItemsError,
    toggleModal,
    addToCart,
    deleteFromCart,
    toggleCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);