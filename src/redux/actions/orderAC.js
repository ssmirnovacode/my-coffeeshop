const orderSubmitted = (order) => {
    return {
        type: 'ORDER_SUBMITTED',
        payload: order
    }
}

const orderError = () => {
    return {
        type: 'ORDER_ERROR'
    };
};


export {orderSubmitted, orderError};