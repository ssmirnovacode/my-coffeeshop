const toggleModal = (item) => {
    return {
        type: 'TOGGLE_MODAL',
        payload: item
    };
}

export {toggleModal};