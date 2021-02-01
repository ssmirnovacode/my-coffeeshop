const toggleOrderForm = () => {
    return {
        type: 'TOGGLE_ORDER_FORM'
    }
}

const saveFormData = (data) => {
    return {
        type: 'SAVE_FORM_DATA',
        payload: data
    }
}

const clearForm = () => {
    return {
        type: 'CLEAR_FORM'
    }
}

export {toggleOrderForm, saveFormData, clearForm};