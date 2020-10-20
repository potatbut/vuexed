export default {
  state: {
    products: [],
  },
  mutations: {
      updateProducts(state, products) {
          state.products = products
      }
  },
  actions: {
      async fetchProducts(ctx) {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/photos?_limit=6"
          )
          const products = await res.json()
          ctx.commit('updateProducts', products)
      }
  },
  getters: {
    allProducts(state) {
        return state.products
    }
  },
}