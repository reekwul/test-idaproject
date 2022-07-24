<template>
      <div class="body">
            <div class="body__asidebody">
                  <v-aside class="body__asidebody__aside"/>
            </div>
            <div class="body__item">
                  <transition-group name="item">
                  <v-item v-for="prod in products"
                          :key="prod"
                          :product_data="prod"
                  />
                  </transition-group>
            </div>
      </div>
</template>

<script>
import VItem from "@/components/v-item";
import VAside from "@/components/v-aside";
import {mapGetters} from "vuex";

export default {
      name: "v-body",
      components: {VAside, VItem},
      computed: {
            ...mapGetters({
                  products: 'product/Prod',
            }),
      },
}
</script>

<style scoped lang="scss">
.body {
      display: flex;

      &__item {
            transition: 0.4s;
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            padding: 0;
            margin: 0;
      }

      &__asidebody {
            width: 380px;

            &__aside {
                  position: fixed;
            }
      }
}
.item-move,
.item-enter-active,
.item-leave-active {
      transition: all 0.6s ease;
}
.item-enter-from,
.item-leave-to {
      opacity: 0;
      transform: translateX(30px);
}
.item-leave-active {
      position: absolute;
}
</style>