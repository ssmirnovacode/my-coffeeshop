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

const orderError = () => {
    return {
        type: 'ORDER_ERROR'
    };
};


export {orderSubmitted, orderError, orderSaved};