const combosLoaded = (newCom) => {
    return {
        type: 'COMBOS_LOADED',
        payload: newCom
    };
};

const combosRequested = () => {
    return {
        type: 'COMBOS_REQUESTED'
    };
};

const combosError = () => {
    return {
        type: 'COMBOS_ERROR'
    };
};

export {combosError, combosRequested, combosLoaded};