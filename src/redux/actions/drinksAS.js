export const beveragesLoaded = (newBev) => {
    return {
        type: 'BEVERAGES_LOADED',
        payload: newBev
    };
};

export const combosLoaded = (newCom) => {
    return {
        type: 'COMBOS_LOADED',
        payload: newCom
    };
};

export const giftsetLoaded = (newItems) => {
    return {
        type: 'GIFTSET_LOADED',
        payload: newItems
    };
};

export const giftsetTabClick = (itemId) => {
    return {
        type: 'GIFTSET_TAB_CLICK',
        payload: itemId
    }
};

export const menuItemsLoaded = (newMenu) => {
    return {
        type: 'MENU_ITEMS_LOADED',
        payload: newMenu
    };
};
