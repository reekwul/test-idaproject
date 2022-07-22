export const prodModule = {
    state: () => ({
        products: [],
    }),
    getters: {
        Prod(state) {
            return state.products;
        },

    },
    mutations: {
        add(state, prod) {
            if(prod.count){
                prod.count = prod.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')+" руб.";
            }
            state.products.push(prod)
            localStorage.setItem('prod',JSON.stringify(state.products))
        },
        del(state, prod) {
            state.products.splice(state.products.indexOf(prod), 1)
            localStorage.setItem('prod',JSON.stringify(state.products))
        },
        inLocal(state) {
            if (localStorage.prod) {
                state.products = JSON.parse(localStorage.prod)
            }
        },
    },
    actions: {
        inLocalStorage({commit}) {
            commit('inLocal')
        },
        addProd({commit}, prod) {
            commit('add', prod)
        },
        delProd({commit}, prod) {
            commit('del', prod)
        }
    },
    namespaced: true
}