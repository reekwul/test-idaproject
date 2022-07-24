<template>
      <aside class="aside">
            <div class="aside__body"
                 @mousemove="active"
            >
                  <p class="aside__body__legend --obligatory">Наименование товара</p>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__inp"
                              :class="{error:visibleName}"
                              placeholder="Введите наименование товара"
                              v-model="prod.name"
                              @focusout="validation(prod.name,'name')"
                        >
                        <p
                              v-if="visibleName"
                              class="aside__body__err"
                        >Поле является обязательным</p>
                  </div>
                  <p class="aside__legend">Описание товара</p>
                  <textarea
                        class="aside__body__description"
                        placeholder="Введите описание товара"
                        v-model="prod.description"
                  ></textarea>
                  <p class="aside__body__legend --obligatory">Ссылка на изображение товара</p>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__inp"
                              :class="{error:visibleHref}"
                              placeholder="Введите ссылку"
                              v-model="prod.href"
                              @focusout="validation(prod.href,'href')"
                        >
                        <p
                              v-if="visibleHref"
                              class="aside__body__err"
                        >Поле является обязательным</p>
                  </div>
                  <p class="aside__body__legend --obligatory">Цена товара</p>
                  <div class="aside__body__block">
                        <input
                              class="aside__body__inp"
                              :class="{error:visibleCount}"
                              placeholder="Введите цену"
                              v-model.number="prod.count"
                              @focusout="validation(prod.count,'count')"
                        >
                        <p
                              v-if="visibleCount"
                              class="aside__body__err"
                        >Поле является обязательным</p>
                  </div>
                  <button id="btn"
                          class="aside__btn"
                          :class="{active:isFormValid}"
                          @click="add"
                  >Добавить товар
                  </button>
            </div>
      </aside>
</template>

<script>
import {mapActions} from 'vuex'

const prodPattern = {
      name: '',
      description: '',
      href: '',
      count: '',
}

export default {
      name: "v-aside",
      data() {
            return {
                  prod: {
                        ...prodPattern
                  },
                  visibleName: false,
                  visibleHref: false,
                  visibleCount: false,
            }
      },
      computed: {
            isFormValid() {
                  return this.prod.count && this.prod.href && this.prod.name && typeof this.prod.count === 'number'
            }
      },
      methods: {
            ...mapActions({
                  addProd: 'product/addProd'
            }),
            add() {
                  if (!this.isFormValid) return;
                  this.addProd({...this.prod});
                  this.resetProd()
                  this.resetVisible()
            },
            resetProd() {
                  this.prod = {
                        ...prodPattern
                  }
            },
            resetVisible() {
                  this.visibleName = false;
                  this.visibleHref = false;
                  this.visibleCount = false;
            },
            validation(value, res) {
                  if (value) {
                        switch (res) {
                              case 'name':
                                    this.visibleName = false;
                                    break;
                              case 'href':
                                    this.visibleHref = false;
                                    break;
                              case 'count':
                                    this.visibleCount = false;
                                    break;
                        }
                  } else {
                        switch (res) {
                              case 'name':
                                    this.visibleName = true;
                                    break;
                              case 'href':
                                    this.visibleHref = true;
                                    break;
                              case 'count':
                                    this.visibleCount = true;
                                    break;
                        }
                  }
            },
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
            display: flex;
            flex-direction: column;
            position: relative;

            font-family: 'Source Sans Pro';
            font-weight: 400;
            font-size: 10px;
            line-height: 13px;
            color: #49485E;

            &__legend {
                  align-self: flex-start;
                  position: relative;
                  margin: 0 0 4px;

                  &.--obligatory {
                        &::after {
                              content: "";
                              display: block;
                              position: absolute;
                              top: 0;
                              right: -4px;
                              width: 4px;
                              height: 4px;
                              border-radius: 50%;
                              background-color: #FF8484;
                        }
                  }
            }

            &__block {
                  position: relative;
            }

            &__inp {
                  transition: 0.1s;
                  margin: 0 0 16px;
                  padding: 0 16px;
                  width: 284px;
                  height: 36px;
                  box-sizing: border-box;

                  border: none;
                  border-radius: 4px;
                  background: #FFFEFB;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

                  font-size: 12px;
                  line-height: 15px;
                  color: #B4B4B4;

                  &:focus {
                        border: 2px solid #FF8484;
                  }
            }

            &__err {
                  margin: 4px 0 2px;
                  position: absolute;
                  bottom: 0;
                  font-size: 8px;
                  line-height: 10px;
                  color: #FF8484;
            }

            &__description {
                  transition: 0.1s;
                  margin: 0 0 16px;
                  box-sizing: border-box;
                  resize: none;
                  height: 108px;
                  border: none;

                  background: #FFFEFB;
                  padding: 10px 16px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  border-radius: 4px;

                  font-size: 12px;
                  line-height: 15px;
                  color: #B4B4B4;

                  &:focus {
                        border: 2px solid #FF8484;
                  }
            }

      }

      &__btn {
            margin: 8px 0 0;
            height: 36px;
            border: none;
            background: #EEEEEE;
            border-radius: 10px;
            transition: 0.4s;

            font-family: 'Inter';
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

.active {
      margin: 8px 0 0;
      width: 284px;
      height: 36px;
      border: none;
      background: #7BAE73;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.error {
      border: 2px solid #FF8484;
}
</style>