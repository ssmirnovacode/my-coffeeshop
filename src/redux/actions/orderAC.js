const orderSubmitted = (order) => {
    return {
        type: 'ORDER_SUBMITTED',
        payload: order
    }
}

const orderSaved = () => {
    return {
        type: 'ORDER_SAVED'
    }
}

const orderError = err => {
    return {
        type: 'ORDER_ERROR',
        payload: err
    };
};


export {orderSubmitted, orderError, orderSaved};