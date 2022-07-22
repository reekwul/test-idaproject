export const prodModule = {
    state: () => ({
        products: [],
        sorted: '',
    }),
    getters: {
        Prod(state) {
            let res = [...state.products];
            return state.sorted === 'name' ? res.sort((a, b) => a.name?.localeCompare(b.name)) :

                state.sorted === 'min' ? res.sort((a, b) => a.count - b.count) :

                    state.sorted === 'max' ? res.sort((a, b) => b.count - a.count) :

                        res;
        },
    },
    mutations: {
        add(state, prod) {
            state.products.push(prod)
            localStorage.setItem('prod', JSON.stringify(state.products))
        },
        del(state, prod) {
            state.products.splice(state.products.indexOf(prod), 1)
            localStorage.setItem('prod', JSON.stringify(state.products))
        },
        inLocal(state) {
            if (localStorage.prod) {
                state.products = JSON.parse(localStorage.prod)
            }
        },
        sort(state, value) {
            state.sorted = value
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
        },
        sortProd({commit}, value) {
            commit('sort', value)
        }
    },
    namespaced: true
}