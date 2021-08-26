const detailsLoaded = (newBev) => {
    return {
        type: 'DETAILS_LOADED',
        payload: newBev
    };
};

const comboDetailsRequested = (id) => {
    return {
        type: 'COMBO_DETAILS_REQUESTED',
        payload: id
    };
};

const menuDetailsRequested = (id) => {
    return {
        type: 'MENU_DETAILS_REQUESTED',
        payload: id
    };
};

const giftsetDetailsRequested = (id) => {
    return {
        type: 'GIFTSET_DETAILS_REQUESTED',
        payload: id
    };
};

const detailsError = () => {
    return {
        type: 'DETAILS_ERROR'
    };
};

export {detailsLoaded, comboDetailsRequested, detailsError, menuDetailsRequested, giftsetDetailsRequested};