import { createStore } from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export default createStore({
    state: {
        cart: [],
    },
    getters: {
        productQty: state => product => {
            const item = state.cart.find(i => i.id_product === product.id_product)
            if (item) {
                return item.quantity
            } else {
                return null
            }
        },
        cartItems: state => {
            return state.cart
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
            updateLocalStorage(state.cart);
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
            updateLocalStorage(state.cart);
        },
        UpdateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart')
            if (cart) {
                state.cart = JSON.parse(cart)
            }
        },
        reset(state) {
            state.cart = [];
            updateLocalStorage(state.cart);
        }
    },
    actions: {

    },
    modules: {

    },
});