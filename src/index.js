const menu = {
    burger: [
        {
            name: '🍔',
            time: 5000,
        },
        {
            name: '🍟',
            time: 3000,
        },
        {
            name: '☕',
            time: 1500,
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 5000,
        },
        {
            name: '🥤',
            time: 1500,
        },
    ],
};

function orderMessage(order, cb) {
    let message = '';
    const start = 0;
    const end = -1;
    order.forEach(el => (message += `${el.value},`));
    cb(`Ваш заказ: ${message.slice(start, end)} готов!`);
}

function makeOrder(order, callBack) {
    const totalOrder = [];
    totalOrder.length = order.length;
    order.forEach((el, index) => {
        setTimeout(() => {
            totalOrder[index] = { value: el.name };
            let emptyValue = totalOrder.findIndex(item => typeof item === 'undefined');
            if (!++emptyValue) {
                callBack(totalOrder, alert);
            }
        }, el.time);
    });
}

makeOrder(menu.burger, orderMessage);
