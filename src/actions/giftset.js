const giftsetLoaded = (newItems) => {
    return {
        type: 'GIFTSET_LOADED',
        payload: newItems
    };
};

const giftsetRequested = () => {
    return {
        type: 'GIFTSET_REQUESTED'
    };
};

const giftsetError = () => {
    return {
        type: 'GIFTSET_ERROR'
    };
};

const giftsetTabClick = (itemId) => {
    return {
        type: 'GIFTSET_TAB_CLICK',
        payload: itemId
    }
}

export {giftsetError, giftsetRequested, giftsetLoaded, giftsetTabClick};