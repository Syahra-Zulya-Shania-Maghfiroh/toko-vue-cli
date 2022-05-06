import { createStore } from 'vuex'
export default createStore({
    state: {
        cart: [],
    },
    getters: {},
    mutations: {
        addToCart(state, product) {
            let item = state.cart.find((i) => i.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({...product, quantity: 1 });
            }
            // updateLocalStorage(state.cart);
        },
    },
    actions: {},
    modules: {},
});