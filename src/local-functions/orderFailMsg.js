const orderFailMsg = (childSelector) => {
    const failMsg = document.createElement('div');
        failMsg.classList.add('fail');
        failMsg.innerHTML = 'Cart is empty';
        document.querySelector(childSelector).parentNode.appendChild(failMsg);
        const timerId = setTimeout( () => {
            failMsg.remove();
            clearInterval(timerId);
        }, 1500);
}

export default orderFailMsg;