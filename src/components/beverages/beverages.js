import React, {Component} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect} from 'react-redux';
//import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import firebase from '../../firebase.config';

class Beverages extends Component {

    componentDidMount() {
        this.props.beveragesRequested();
        const bevRef = firebase.database().ref('beverages');

        bevRef.on('value', (snapshot) => {
            const items = snapshot.val();
            if (items) {
                const itemList = [];
                for (let id in items) {
                    itemList.push({ id, ...items[id] });
                };
                this.props.beveragesLoaded(itemList);
            }
            else {
                this.props.beveragesError();
                console.log(this.props.error);
            }
        });
    };

    render() {
        const {beverages, loading, error} = this.props;

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

        return (
            <section>
                <Heading small={'Your Personalized Coffee'} big={'COFFEE BUILD YOUR BASE'} id="beverages"/>
                <div className="beverages_container">
                    {
                        beverages.map(item => {
                            return(
                                <BeverageItem key={item.id} item={item}/>
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
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps)(Beverages);