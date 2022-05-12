import { createStore } from 'vuex'
export default createStore({
    state: {
        cart: [],
    },
    getters: {
        productQty: state => product => {
            const item = state.cart.find(i => i.id_product == product.id_product)
            if (item) return item.quantity
            else return null
        }
    },
    mutations: {
        addToCart(state, product) {
            let item = state.cart.find((i) => i.id_product === product.id_product);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({...product, quantity: 1 });
            }
            // updateLocalStorage(state.cart);
        },
        removeProduct(state, product) {
            let item = state.cart.find(i => i.id_product === product.id_product)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id_product !== product.id_product)
                }
            }
        },
    },
    actions: {

    },
    modules: {

    },
});