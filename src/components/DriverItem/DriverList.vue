<template>
    <ul>
        <driver-item 
        v-for="item in list" 
        :key="item.id"
        :id="item.id" 
        :name="item.name" 
        :team="item.team">
        </driver-item>
    </ul>
</template>

<script>
import  DriverItem from './DriverListItem.vue'
export default {
    // props:["list"],
    inject: ["list"],
    components:
    {
        DriverItem,
    },
    

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>