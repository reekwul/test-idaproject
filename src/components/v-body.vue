<template>
      <div class="body">
            <div class="body__asidebody">
                  <v-aside class="body__asidebody__aside"/>
            </div>
            <div class="body__item">
                  <v-item v-for="prod in this.products"
                          :key="prod"
                          :product_data="prod"
                  />
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
                  products: 'product/Prod'
            }),
      },
}
</script>

<style scoped lang="scss">
.body {
      display: flex;

      &__item {
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
</style>