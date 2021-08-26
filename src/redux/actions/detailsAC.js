const detailsLoaded = (newBev) => {
    return {
        type: 'DETAILS_LOADED',
        payload: newBev
    };
};

const detailsRequested = (id) => {
    return {
        type: 'DETAILS_REQUESTED',
        payload: id
    };
};

const detailsError = () => {
    return {
        type: 'DETAILS_ERROR'
    };
};

export {detailsLoaded, detailsRequested, detailsError};