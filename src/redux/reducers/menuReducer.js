
const menuReducer = (state={
                            items: [],
                            loading: true,
                            error: false
                    }, action) => {
    switch (action.type) {
        case 'MENU_ITEMS_LOADED': 
            return {
                    items: action.payload,
                    loading: false,
                    error: false
                }
        case 'MENU_ITEMS_REQUESTED': 
            return {
                    ...state,
                    loading: true,
                    error: false
                }
        case 'MENU_ITEMS_ERROR': 
            return {
                    ...state,
                    loading: false,
                    error: true
                }
            default:
                return state;		
        }
}

export default menuReducer;