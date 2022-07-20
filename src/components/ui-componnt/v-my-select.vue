<template>
    <select class="select" @change="changeOption">
        <option class="select__opt" selected value="По умолчанию">По умолчанию</option>
        <option class="select__opt" value="min">Подешевле</option>
        <option class="select__opt" value="max">Подороже</option>
        <option class="select__opt" value="nam">По наименованию</option>
    </select>
</template>

<script>
export default {
    name: "v-my-select",
    data() {
        return {}
    },
    methods:{
        changeOption(event){
            console.log(event.target.value)
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
.select{
    margin: 32px;
    padding: 10px 0 10px 16px;
    height: 36px;

    /* Darks & Whites / White */

    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */


    /* Greys / 500 */

    color: #B4B4B4;

    &__opt{


    }
}
select:focus {
    outline:none
}

</style>