

const comboReducer = (state={
                            items: [],
                            loading: true,
                            error: false
                    }, action) => {
    switch (action.type) {
        case 'COMBOS_LOADED': 
            return {
                    items: action.payload,
                    loading: false,
                    error: false
                }
        case 'COMBOS_REQUESTED': 
            return {
                    items: action.payload,
                    loading: true,
                    error: false
                }
        case 'COMBOS_ERROR': 
            return {
                    items: action.payload,
                    loading: false,
                    error: true
                }
            default:
                return state;		
        }
}

export default comboReducer;