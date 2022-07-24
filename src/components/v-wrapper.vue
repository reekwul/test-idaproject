<template>
      <div class="wrapper">
            <v-header/>
            <v-body/>
      </div>
</template>

<script>
import VHeader from "@/components/v-header";
import VBody from "@/components/v-body";

export default {
      name: "v-wrapper",
      components: {VBody, VHeader}
}
</script>

<style scoped lang="scss">
.wrapper {
      width: 1440px;
}

</style>