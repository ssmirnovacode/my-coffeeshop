const toggleModal = (itemId=null) => {
    return {
        type: 'TOGGLE_MODAL',
        payload: itemId
    };
}

export {toggleModal};