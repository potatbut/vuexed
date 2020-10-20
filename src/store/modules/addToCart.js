export default {
    state: {
        cart: [],
    },
    mutations: {
        setCart: (state, item) => {
            state.cart.push(item)
        }
    },
    actions: {
        add_To_Cart({commit}, item) {
            commit('setCart', item)
    }
    },
    getters: {
        cart(state){
            return state.cart
        } 
    },
}