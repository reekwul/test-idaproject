<template>
    <aside class="aside" >
        <div class="aside__body">
            <p>Наименование товара</p>
            <input
                class="aside__body__inpt"
                placeholder="Введите наименование товара"
                v-model="prod.name"
            >
            <p>Описание товара</p>
            <textarea
                class="aside__body__text"
                placeholder="Введите описание товара"
                v-model="prod.description"
            ></textarea>
            <p>Ссылка на изображение товара</p>
            <input
                class="aside__body__inpt"
                placeholder="Введите ссылку"
                v-model="prod.href"
            >
            <p>Цена товара</p>
            <input
                class="aside__body__inpt"
                placeholder="Введите цену"
                v-model.number="prod.count"
            >
            <button class="aside__body__btn"
                    @click="add"
            >Добавить товар</button>
        </div>
    </aside>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "v-aside",
    data(){
        return{
            prod:{
                name:String(),
                description:String(),
                href:String(),
                count:'',
            }

        }
    },
    methods: {
        ...mapActions({
            addProd:'product/addProd'
        }),
        add(){
            if(typeof this.prod.count === "number" && this.prod.href && this.prod.name ){
                console.log(this.prod.count)
                this.addProd({...this.prod});
            }
            this.prod.count='';
            this.prod.href='';
            this.prod.description='';
            this.prod.name='';
        }
    },
}
</script>

<style scoped lang="scss">
.aside{
    margin: 0 16px 0 32px;
    display: flex;
    justify-content: center;
    width: 332px;
    height: 440px;
    border-radius: 4px;
    box-sizing: border-box;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    &__body{
        margin: 24px;
        display: flex;
        flex-direction: column;


        font-family: 'Source Sans Pro';
        font-style: normal;
        font-size: 10px;
        line-height: 13px;
        color: #49485E;

        &__inpt{
            margin: 0 0 16px;
            width: 284px;
            height: 36px;
            box-sizing: border-box;

            border: none;
            /* Darks & Whites / White */

            background: #FFFEFB;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            padding: 0 16px;
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */


            /* Greys / 500 */

            color: #B4B4B4;
        }
        &__text{
            margin: 0 0 16px;
            box-sizing: border-box;
            resize: none;
            width: 284px;
            height: 108px;
            border: none;
            /* Darks & Whites / White */

            padding: 10px 16px;
            background: #FFFEFB;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */
            /* Greys / 500 */

            color: #B4B4B4;

        }
        &__btn{
            margin: 8px 0 0 ;
            width: 284px;
            height: 36px;
            border: none;
            background: #EEEEEE;
            border-radius: 10px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */

            text-align: center;
            letter-spacing: -0.02em;

            /* Greys / 500 */

            color: #B4B4B4;

        }
    }
    &__body p{
        margin: 0 0 4px;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        /* identical to box height */

        /* Temp / Darks / Lesser */

        color: #49485E;

    }
}

</style>