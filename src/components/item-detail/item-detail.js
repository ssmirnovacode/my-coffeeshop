import React, {Component} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions/modal';

class ItemDetail extends Component {

    render() {
        if (this.props.modalShown) {
            return(
                <div className="modal_container">
                    <div className="modal_dialog">
                        <div className="modal_content">
                            <div data-close className="modal_close" onClick={() => this.props.toggleModal()}>&times;</div>
                            <div className="modal_title">item title</div>
                            <div className="modal_image"></div>
                            <div className="modal_text">text text text text text text text text text text text text</div>
                            <button className="menu-item_btn">Order now</button>
                        </div>
                    </div>
                </div>
            )
        }
        else return false;
    }
    
    
}

const mapStateToProps = (state) => {
    return {
        modalShown: state.modalShown
    }
}

const mapDispatchToProps = {
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);