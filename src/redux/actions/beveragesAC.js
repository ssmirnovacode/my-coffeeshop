const beveragesLoaded = (newBev) => {
    return {
        type: 'BEVERAGES_LOADED',
        payload: newBev
    };
};

const beveragesRequested = () => {
    return {
        type: 'BEVERAGES_REQUESTED'
    };
};

const beveragesError = () => {
    return {
        type: 'BEVERAGES_ERROR'
    };
};

export {beveragesLoaded, beveragesRequested, beveragesError};