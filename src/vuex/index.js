import {createStore} from "vuex";
import {prodModule} from "@/vuex/product";


export default createStore({
    modules: {
        product: prodModule
    }
});
