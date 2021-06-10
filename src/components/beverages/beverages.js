import React, {Component} from 'react';
import './beverages.scss';
import BeverageItem from '../beverage-item/beverage-item';
import Heading from '../heading/heading';
import {connect} from 'react-redux';
import { beveragesLoaded, beveragesError, beveragesRequested } from '../../redux/actions/beveragesAC';
import Loading from '../loading/loading';
import Error from '../error/error';
import { db } from '../../firebase.config';
import {firebaseLoop} from '../../services/tools';

class Beverages extends Component {

    componentDidMount() {
        this.props.beveragesRequested();
        this.props.beveragesRequested();

        db.collection('beverages').get()
        .then(snapshot => {
            this.props.beveragesLoaded(firebaseLoop(snapshot));
        })
        .catch( () => this.props.beveragesError());
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
        beverages: state.beverages,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    beveragesLoaded,
    beveragesRequested,
    beveragesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);