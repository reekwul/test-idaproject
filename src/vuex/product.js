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
       add(state,prod){
           state.products.push(prod)
       },
        inLocal(){
            if(localStorage['prod']){
                console.log(localStorage)
            }
        },
    },
    actions: {
        inLocalStorage({commit}){
            commit('inLocal')
        },
        addProd({commit},prod){
            commit('add',prod)
        }
        },
    namespaced: true
}