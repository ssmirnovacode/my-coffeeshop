const initialState = {
    beverages: [],
    combos: [],
    menuItems: [],
    loading: true,
    error: false,
    modalShown: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEVERAGES_LOADED': 
            return {
                ...state, 
                beverages: action.payload,
                loading: false
            }
        case 'BEVERAGES_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'BEVERAGES_ERROR': 
            return {
                ...state,
                error: true
            }

        case 'MENU_ITEMS_LOADED': 
            return {
                ...state, 
                menuItems: action.payload,
                loading: false
            }
        case 'MENU_ITEMS_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'MENU_ITEMS_ERROR': 
            return {
                ...state,
                error: true
            }

        case 'COMBOS_LOADED': 
            return {
                ...state, 
                combos: action.payload,
                loading: false
            }
        case 'COMBOS_REQUESTED': 
            return {
                ...state,
                loading: true
            }
        case 'COMBOS_ERROR': 
            return {
                ...state,
                error: true
            }
        case 'TOGGLE_MODAL': 
            return {
                ...state,
                modalShown:!state.modalShown
            }    
        default:
            return state;		
    }
}

export default reducer;