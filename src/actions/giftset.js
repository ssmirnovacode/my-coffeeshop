const giftsetLoaded = (newItem) => {
    return {
        type: 'GIFTSET_LOADED',
        payload: newItem
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

export {giftsetError, giftsetRequested, giftsetLoaded};