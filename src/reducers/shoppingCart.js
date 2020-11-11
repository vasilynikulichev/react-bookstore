const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1),
        ];
    }

    if (index === -1) {
        return [
            ...cartItems,
            item,
        ];
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1),
    ];
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0,
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price,
    };
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems: oldCartItems}} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = oldCartItems.findIndex(({id}) => id === bookId);
    const item = oldCartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    const cartItems = updateCartItems(oldCartItems, newItem, itemIndex);
    const orderTotal = cartItems.reduce(((accumulator, currentValue) => accumulator + currentValue.total), 0);

    return {
        cartItems,
        orderTotal,
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -1 * item.count);
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;