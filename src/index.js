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

function makeOrder(order, callBack) {
    const totalOrder = [];
    totalOrder.length = order.length;
    order.forEach((el, index) => {
        setTimeout(() => {
            totalOrder[index] = { value: el.name };
            let emptyValue = totalOrder.findIndex(item => typeof item === 'undefined');
            if (!++emptyValue) {
                callBack(totalOrder.map(item => item.value));
            }
        }, el.time);
    });
}

makeOrder(menu.burger, alert);
