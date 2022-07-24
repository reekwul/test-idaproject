<template>
      <v-wrapper/>
</template>

<script>


import VWrapper from "@/components/v-wrapper";
import {mapActions} from "vuex";

export default {
      name: 'App',
      components: {
            VWrapper
      },
      methods: {
            ...mapActions({
                  inLocal: 'product/inLocalStorage',
            }),
      },
      mounted() {
            this.inLocal()
      },
}
</script>

<style lang="scss" scoped>
</style>
