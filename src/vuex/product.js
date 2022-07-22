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
        },
        del(state, prod) {
            state.products.splice(state.products.indexOf(prod), 1)
        },
        inLocal() {
            if (localStorage['prod']) {
                console.log(localStorage)
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