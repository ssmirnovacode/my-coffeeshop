/* const toggleButton = (orderBtnSelector, viewCatBtnSelector) => {
    document.querySelector(viewCatBtnSelector).classList.remove('hidden');
    document.querySelector(orderBtnSelector).classList.add('hidden');
} */

const toggleButton = (addToCartBtnSelector, viewCartBtnSelector, e) => {

    console.log(e.target);

    const cardId = e.target.getAttribute('data-id'); // getting the item.id

    const addToCartBtns = document.querySelectorAll(addToCartBtnSelector),
        viewCartBtns = document.querySelectorAll(viewCartBtnSelector);

    addToCartBtns.forEach(elem => {
        if (elem.getAttribute('data-id') === cardId) {
            elem.classList.add('hidden');
        }
    });

    viewCartBtns.forEach(elem => {
        if (elem.getAttribute('data-id') === cardId) {
            elem.classList.remove('hidden');
        }
    });

}

export default toggleButton;