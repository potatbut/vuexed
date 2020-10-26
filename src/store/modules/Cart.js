export default {
    state: {
        cart: [],
    },
    mutations: {
        setCart: (state, item) => {
            state.cart.push(item)
        },
        removeInCart: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        add_To_Cart({commit}, item) {
            commit('setCart', item)
        },
        delete_From_Cart({commit}, index) {
            commit('removeInCart', index)
        }
    },
    getters: {
        cart(state){
            return state.cart
        } 
    },
}