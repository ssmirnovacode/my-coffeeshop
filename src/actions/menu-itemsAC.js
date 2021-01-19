const menuItemsLoaded = (newMenu) => {
    return {
        type: 'MENU_ITEMS_LOADED',
        payload: newMenu
    };
};

const menuItemsRequested = () => {
    return {
        type: 'MENU_ITEMS_REQUESTED'
    };
};

const menuItemsError = () => {
    return {
        type: 'MENU_ITEMS_ERROR'
    };
};

export {menuItemsError, menuItemsLoaded, menuItemsRequested};