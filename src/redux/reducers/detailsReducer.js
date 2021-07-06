

const detailsReducer = (state={
        item: null,
        loading: true,
        error: false
}, action) => {
    switch (action.type) {
        case 'DETAILS_LOADED': 
            return {
                    item: action.payload,
                    loading: false,
                    error: false
                }
        case 'DETAILS_REQUESTED': 
            return {
                    ...state,
                    loading: true,
                    error: false
                }
        case 'DETAILS_ERROR': 
            return {
                    ...state,
                    loading: false,
                    error: true
                }
            default:
                return state;		
        }
}

export default detailsReducer;