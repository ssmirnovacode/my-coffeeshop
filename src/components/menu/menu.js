import React, {Component} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested } from '../../redux/actions/menu-itemsAC';
import {addToCart} from '../../redux/actions/cartAC';
import baseURL from '../../assets/baseURL';
import RequestService from '../../services/requestService';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

const requestService = new RequestService();

class Menu extends Component {
    constructor(props) {
        super(props);

        this.showMore = this.showMore.bind(this);
    }

    componentDidMount() {
        this.props.menuItemsRequested();

        const itemRef = firebase.database().ref('menuItems');
        itemRef.on('value', (snapshot) => {
        const items = snapshot.val();
        const itemList = [];
        for (let id in items) {
            itemList.push({ id, ...items[id] });
        }
        this.props.menuItemsLoaded(itemList);
        }, (err) => {this.props.menuItemsError(err)});
    }

    showMore = () => {
        requestService.getMenuItems(baseURL+'menuItems')
        .then(res => this.props.menuItemsLoaded(res))
        .catch( () => this.props.menuItemsError())
        .finally(() => document.querySelector('.menu_more').remove());
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
            <section className="menu">
                <Heading small={'Choose Your Drink'} big={'ORDER ONLINE AND SKIP THE LINE'} id="menu"/>
                <div className="menu_container">
                    <div className="bg-menu"></div>
                    {
                        menuItems.map((item, i) => {                           
                            return (
                                <MenuItem key={i} item={item} addToCart={() => this.props.addToCart(item)}/>
                            )
                        })
                    }                       
                </div>
                <div className="menu_more" onClick={this.showMore}>VIEW MORE</div>
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