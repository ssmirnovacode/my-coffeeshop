const detailsLoaded = (newBev) => {
    return {
        type: 'DETAILS_LOADED',
        payload: newBev
    };
};

const detailsRequested = () => {
    return {
        type: 'DETAILS_REQUESTED'
    };
};

const detailsError = () => {
    return {
        type: 'DETAILS_ERROR'
    };
};

export {detailsLoaded, detailsRequested, detailsError};