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

const postOrderRequested = () => {
    return {
        type: 'POST_ORDER_REQUESTED'
    }
}

export {orderSubmitted, orderError, postOrderRequested};