import React, {Component} from 'react';
import './menu.scss';
import Heading from '../heading/heading';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';
import { menuItemsLoaded, menuItemsError, menuItemsRequested } from '../../redux/actions/menu-itemsAC';
import {addToCart} from '../../redux/actions/cartAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.showMore = this.showMore.bind(this);
        this.state = {
            isMoreBtnVisible: true
        }
    }

    componentDidMount() {
        this.props.menuItemsRequested();

        const itemRef = firebase.database().ref('menuItems');
        itemRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                this.props.menuItemsLoaded(itemList.filter((item, i) => i < 4));
            }
            else {
                this.props.menuItemsError();
            }
        });
    }

    showMore = () => {
        const itemRef = firebase.database().ref('menuItems');
        itemRef.on('value', (snapshot) => {
        const items = snapshot.val();
        if (items) {
            const itemList = [];
            for (let id in items) {
                itemList.push({ id, ...items[id] });
            };
            this.props.menuItemsLoaded(itemList);
            this.setState({
                isMoreBtnVisible: false
            })
        }
        else {
            this.props.menuItemsError();
        }
        });
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
                {
                    this.state.isMoreBtnVisible ? <div className="menu_more" onClick={this.showMore}>VIEW MORE</div> : null
                }
                
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