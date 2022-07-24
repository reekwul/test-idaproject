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

        },
        del(state, prod) {
            state.products.splice(state.products.indexOf(prod), 1)

        },
        inLocal(state) {
                state.products = JSON.parse(localStorage.prod)

        },
        sort(state, value) {
            state.sorted = value
        },
    },
    actions: {
        inLocalStorage({commit}) {
            if (localStorage.prod) {
                commit('inLocal')
            }
            },
        addProd({commit,state}, prod) {
            commit('add', prod)

            localStorage.setItem('prod', JSON.stringify(state.products))
        },
        delProd({commit,state}, prod) {
            commit('del', prod)
            localStorage.setItem('prod', JSON.stringify(state.products))
        },
        sortProd({commit}, value) {
            commit('sort', value)
        }
    },
    namespaced: true
}