const toggleButton = (orderBtnSelector, viewCatBtnSelector) => {
    document.querySelector(viewCatBtnSelector).classList.remove('hidden');
    document.querySelector(orderBtnSelector).classList.add('hidden');
}

export default toggleButton;