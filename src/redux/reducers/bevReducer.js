
const bevReducer = (state={
                            items: [],
                            loading: true,
                            error: false
                            }, action) => {
    switch (action.type) {
        case 'BEVERAGES_LOADED': 
            return {
                    items: action.payload,
                    loading: false,
                    error: false
                }
            
        case 'BEVERAGES_REQUESTED': 
            return {
                    ...state,
                    loading: true,
                    error: false
                }
            
        case 'BEVERAGES_ERROR': 
            return {
                    ...state,
                    loading: false,
                    error: true
                }
            
            default:
                return state;		
        }
}

export default bevReducer;