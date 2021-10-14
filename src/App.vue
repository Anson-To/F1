<template>
    <!-- <header>F1 drivers</header> -->
    <the-header></the-header>
    <the-driver></the-driver>
    <!-- <driver-list :list="lists"></driver-list> -->
</template>

<script>
// Local components
import  TheHeader from './components/layouts/TheHeader.vue'
// import  DriverList from './components/DriverItem/DriverList.vue'
import  TheDriver from './components/DriverItem/TheDriver.vue';
// import  DriverItem from './components/DriverItem/DriverListItem.vue'
export default {
    components:{
        TheHeader,
        // DriverList,
        TheDriver,
    },
    data()
    {
        return {
            lists:[
                {
                    id:"lewis",
                    name:"Lewis",
                    team:"Benz"
                },
                {
                    id:"valtteri",
                    name:"Valtteri",
                    team:"Benz"
                },
            ]
        };
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
