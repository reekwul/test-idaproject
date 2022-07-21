<template>
      <aside class="aside">
            <div class="aside__body">
                  <div class="aside__body__p">
                        <p class="aside__body__p">Наименование товара</p>
                        <div class="aside__body__p__point"></div>
                  </div>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__block__inpt"
                              placeholder="Введите наименование товара"
                              v-model="prod.name"
                              @focusout="validation(prod.name,'name')"
                        >
                        <p
                              v-if="visibleName"
                              class="aside__body__block__p"
                        >Поле является обязательным</p>
                  </div>
                  <p class="aside__body__p">Описание товара</p>
                  <textarea
                        class="aside__body__text"
                        placeholder="Введите описание товара"
                        v-model="prod.description"
                  ></textarea>
                  <div class="aside__body__p">
                        <p class="aside__body__p">Ссылка на изображение товара</p>
                        <div class="aside__body__p__point"></div>
                  </div>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__block__inpt"
                              placeholder="Введите ссылку"
                              v-model="prod.href"
                              @focusout="validation(prod.href,'href')"
                        >
                        <p
                              v-if="visibleHref"
                              class="aside__body__block__p"
                        >Поле является обязательным</p>
                  </div>

                  <div class="aside__body__p">
                        <p class="aside__body__p">Цена товара</p>
                        <div class="aside__body__p__point"></div>
                  </div>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__block__inpt"
                              placeholder="Введите цену"
                              v-model.number="prod.count"
                              @focusout="validation(prod.count,'count')"
                        >
                        <p
                              v-if="visibleCount"
                              class="aside__body__block__p"
                        >Поле является обязательным</p>
                  </div>

                  <button id="btn"
                        class="aside__body__btn"
                          @click="add"
                  >Добавить товар
                  </button>
            </div>
      </aside>
</template>

<script>
import {mapActions} from 'vuex'

export default {
      name: "v-aside",
      data() {
            return {
                  prod: {
                        name: String(),
                        description: String(),
                        href: String(),
                        count: '',
                  },
                  visibleName: false,
                  visibleHref: false,
                  visibleCount: false,
            }
      },
      methods: {
            ...mapActions({
                  addProd: 'product/addProd'
            }),
            add() {
                  if (this.prod.count && this.prod.href && this.prod.name) {
                        console.log(this.prod.count)
                        this.addProd({...this.prod});
                        this.prod.count = '';
                        this.prod.href = '';
                        this.prod.description = '';
                        this.prod.name = '';
                        this.visibleName = false
                        this.visibleHref = false
                        this.visibleCount = false
                        let btn = document.getElementById('btn');
                        btn.className = "aside__body__btn"
                  }


            },
            validation(value,res) {

               if(value){
                     switch (res){
                           case 'name': this.visibleName = false
                                 break;
                           case 'href': this.visibleHref = false
                                 break;
                           case 'count': this.visibleCount = false
                                 break;
                     }
               }else{
                     switch (res){
                           case 'name': this.visibleName = true
                                 break;
                           case 'href': this.visibleHref = true
                                 break;
                           case 'count': this.visibleCount = true
                                 break;
                     }
               }
               if  (this.prod.count && this.prod.href && this.prod.name){
                 let btn = document.getElementById('btn');
                     btn.className = 'active'
               }
            }
      },
}
</script>

<style scoped lang="scss">
.aside {
      margin: 0 16px 0 32px;
      display: flex;
      justify-content: center;
      width: 332px;
      height: 440px;
      border-radius: 4px;
      box-sizing: border-box;
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);

      &__body {
            margin: 24px;
            display: flex;
            flex-direction: column;


            font-family: 'Source Sans Pro';
            font-style: normal;
            font-size: 10px;
            line-height: 13px;
            color: #49485E;

            &__p {
                  display: flex;

                  margin: 0 0 4px;
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 10px;
                  line-height: 13px;
                  /* identical to box height */

                  /* Temp / Darks / Lesser */

                  color: #49485E;

                  &__point {
                        width: 4px;
                        height: 4px;
                        background: #FF8484;
                        border-radius: 4px;
                  }
            }

            &__block{
                  position: relative;
                  &__inpt {
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
                  &__p{
                        margin: 4px 0 2px;
                       position: absolute;
                       bottom: -2px;

                       font-family: 'Source Sans Pro';
                       font-style: normal;
                       font-weight: 400;
                       font-size: 8px;
                       line-height: 10px;
                       /* identical to box height */


                       color: #FF8484;
                 }
            }
            &__text {
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

            &__btn {
                  margin: 8px 0 0;
                  width: 284px;
                  height: 36px;
                  border: none;
                  background: #EEEEEE;
                  border-radius: 10px;
                  transition: 0.4s;

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
}
.active{
      margin: 8px 0 0;
      width: 284px;
      height: 36px;
      border: none;
      background: #7BAE73;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: 0.4s;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */

      color: #FFFFFF;

}
</style>