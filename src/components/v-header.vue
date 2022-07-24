<template>
      <div class="head">
            <h1 class="head__h">Добавление товара</h1>
            <v-my-select />
      </div>
</template>

<script>
import VMySelect from "@/components/ui-componnt/v-my-select";

export default {
      name: "v-header",
      components: {VMySelect},
}
</script>

<style scoped lang="scss">
.head {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;

      &__h {
            width: 247px;
            height: 35px;
            margin: 32px 32px 16px;

            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 35px;

            color: #3F3F3F;
      }
}
</style>