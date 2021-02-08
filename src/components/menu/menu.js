import React, {Component} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested } from '../../actions/menu-itemsAC';
import {addToCart} from '../../actions/cartAC';
import baseURL from '../../services/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.showMore = this.showMore.bind(this);
    }

    componentDidMount() {
        this.props.menuItemsRequested();

        const requestService = new RequestService();

        requestService.getMenuItems(baseURL+'menuItems')
        .then(res => this.props.menuItemsLoaded(res))
        .catch( () => this.props.menuItemsError());
    }

    showMore = () => {
        document.querySelectorAll('.toExpand').forEach(item => item.classList.remove('toExpand'));
        document.querySelector('.menu_more').remove();
              
    }

    render() {

        const {menuItems, loading, error} = this.props;

        /* const usualView = ({
            
                menuItems.map((item, i) => {
                    if ( i > 3) {
                       return (
                           <MenuItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                       )
                   }  
                   else return null;  
                })
        }) */

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
            <section className="menu">
                <Heading small={'Choose Your Drink'} big={'ORDER ONLINE AND SKIP THE LINE'} id="menu"/>
                <div className="menu_container">
                    <div className="bg-menu"></div>
                    {
                            menuItems.map((item, i) => {
                                if ( i < 4) {
                                   return (
                                       <MenuItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                                   )
                               }  
                                else return (
                                    <div className="toExpand">
                                        <MenuItem key={item.id} item={item} addToCart={() => this.props.addToCart(item)}/>
                                    </div>
                                )  
                            })
                    }    
                    
                </div>
                <div className="menu_more" onClick={this.showMore}>View more</div>
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
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);