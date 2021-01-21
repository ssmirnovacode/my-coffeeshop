import React, {Component} from 'react';
import './item-detail.scss';
import {connect} from 'react-redux';
import {toggleModal} from '../../actions/modal';

class ItemDetail extends Component {

    render() {

        if (this.props.modal.shown) {
            const {title, price, image, content} = this.props.modal.item;
            return(
                <div className="modal_container"  onClick={() => this.props.toggleModal()}>
                    <div className="modal_dialog">
                        <div className="modal_content">
                            <div data-close className="modal_close" onClick={() => this.props.toggleModal()}>&times;</div>
                            <div className="modal_title">{title}</div>
                            <div className="modal_price">{price}</div>
                            <div className="modal_image"><img src={image} alt={title}/></div>
                            <div className="modal_text">{content}</div>
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
        modal: state.modal
    }
}

const mapDispatchToProps = {
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);