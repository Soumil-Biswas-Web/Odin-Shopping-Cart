export const cartItems = [];

export const addItem = (id) => {}

export const removeItem = (id) => {
    cartItems.forEach((item, index) => {
        if (item.id === id) {
            cartItems.splice(index, 1);
        }
    })
}

export const addItems = (id, qty) => {
    cartItems.push({id: id, qty: qty})
}
