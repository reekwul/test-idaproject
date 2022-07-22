<template>

      <div
            @mouseleave="this.hover=false"
            @mouseover="this.hover=true"
            class="item">
            <div
                  v-show="hover"
                  @click="delProd(product_data)"
                  class="item__del">
                  <img class="item__del__img" src="../styles/img/img.png" alt="delete">
            </div>
            <div class="item__img">
                  <img
                        class="item__img"
                        :src="product_data.href" alt="not img">
            </div>
            <div class="item__body">
                  <div>
                        <h3 class="item__body__name">{{ product_data.name }}</h3>
                        <p class="item__body__description">{{ product_data.description }}</p>
                  </div>
                  <h2 class="item__body__count">{{ countMask }}</h2>
            </div>
      </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
      name: "v-item",
      props: {
            product_data: {
                  type: Object,
                  default() {
                        return {}
                  }
            }
      },
      data() {
            return {
                  hover: false,
            }
      },
      methods: {
            ...mapActions({
                  delProd: 'product/delProd'
            }),
      },
      computed: {
            countMask() {
                  return this.product_data.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " руб."
            }
      }
}
</script>

<style scoped lang="scss">
.item {
      width: 332px;
      height: 423px;
      margin-right: 16px;
      margin-bottom: 16px;
      box-sizing: border-box;
      position: relative;
      z-index: 0;
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;

      &__del {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -8px;
            right: -8px;
            width: 32px;
            height: 32px;
            z-index: 1;
            background: #FF8484;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;

            &__img {
                  width: 13px;
                  height: 16px;
            }
      }

      &__del:hover {
            background: rgba(255, 84, 84, 0.5);
      }

      &__img {
            box-sizing: border-box;
            width: 332px;
            height: 200px;
            border-radius: 4px 4px 0 0;
      }

      &__body {
            box-sizing: border-box;
            height: 183px;
            width: 300px;
            margin: 16px 16px 24px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            font-family: 'Source Sans Pro';
            font-style: normal;

            color: #3F3F3F;

            &__name {
                  margin: 0;


                  font-weight: 600;
                  font-size: 20px;
                  line-height: 25px;


            }

            &__description {
                  margin: 16px 0;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 20px;
            }

            &__count {
                  margin: 0;
                  justify-content: end;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 30px;

            }
      }
}

</style>